<script setup lang="ts">
import { getCountries, getCountryCallingCode, parsePhoneNumber } from 'libphonenumber-js/max';
import lookup from 'country-code-lookup';
import {
  formatTypeToHumanReadable,
  getDefaultCountryCode,
  getFullCountryName,
} from './phone-parser-and-formatter.models';
import { withDefaultOnError } from '@/utils/defaults';
import { booleanToHumanReadable } from '@/utils/boolean';
import { useValidation } from '@/composable/validation';

const rawPhone = ref('');
const defaultCountryCode = ref(getDefaultCountryCode());
const validation = useValidation({
  source: rawPhone,
  rules: [
    {
      validator: (value) => value === '' || /^[0-9 +\-()]+$/.test(value),
      message: 'Invalid phone number',
    },
  ],
});

const parsedDetails = computed(() => {
  if (!validation.isValid) {
    return undefined;
  }

  const parsed = withDefaultOnError(() => parsePhoneNumber(rawPhone.value, defaultCountryCode.value), undefined);

  if (!parsed) {
    return undefined;
  }

  return [
    {
      label: '归属地',
      value: getFullCountryName(parsed.country) + '(' + parsed.country + ')',
    },
    {
      label: '归属码',
      value: parsed.countryCallingCode,
    },
    {
      label: '是否 合法?',
      value: booleanToHumanReadable(parsed.isValid()),
    },
    {
      label: '是否 可行?',
      value: booleanToHumanReadable(parsed.isPossible()),
    },
    {
      label: '类型',
      value: formatTypeToHumanReadable(parsed.getType()),
    },
    {
      label: '国际 格式化',
      value: parsed.formatInternational(),
    },
    {
      label: '本地 格式化',
      value: parsed.formatNational(),
    },
    {
      label: 'E.164 格式化',
      value: parsed.format('E.164'),
    },
    {
      label: 'RFC3966 格式化',
      value: parsed.format('RFC3966'),
    },
  ];
});

const countriesOptions = getCountries().map((code) => ({
  label: `${lookup.byIso(code)?.country || code} (+${getCountryCallingCode(code)})`,
  value: code,
}));
</script>

<template>
  <div>
    <c-select
      v-model:value="defaultCountryCode"
      label="Default country code:"
      :options="countriesOptions"
      searchable
      mb-5
    />

    <c-input-text
      v-model:value="rawPhone"
      placeholder="Enter a phone number"
      label="Phone number:"
      :validation="validation"
      mb-5
    />

    <n-table v-if="parsedDetails">
      <tbody>
        <tr v-for="{ label, value } in parsedDetails" :key="label">
          <td font-bold>
            {{ label }}
          </td>
          <td>
            <span-copyable v-if="value" :value="value" />
            <span v-else op-70> Unknown </span>
          </td>
        </tr>
      </tbody>
    </n-table>
  </div>
</template>
