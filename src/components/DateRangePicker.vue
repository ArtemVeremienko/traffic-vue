<template>
  <date-range-picker
    ref="picker"
    :opens="opens"
    :locale-data="{ firstDay: 1, format: 'DD-MM-YYYY HH:mm:ss' }"
    :minDate="minDate"
    :maxDate="maxDate"
    :showWeekNumbers="showWeekNumbers"
    :showDropdowns="showDropdowns"
    :autoApply="autoApply"
    v-model="dateRange"
    @update="updateValues"
    @toggle="checkOpen"
    :linkedCalendars="linkedCalendars"
  >
    <template v-slot:input="picker" style="min-width: 350px">
      {{ picker.startDate | date }} - {{ picker.endDate | date }}
    </template>
  </date-range-picker>
</template>

<script>
import DateRangePicker from "vue2-daterange-picker";
import "vue2-daterange-picker/dist/vue2-daterange-picker.css";

export default {
  components: { DateRangePicker },
  data() {
    return {
      dateRange: {
        startDate: "2020-10-01",
        endDate: "2020-10-31",
      },
      opens: "left",
      minDate: "2020-01-01",
      maxDate: "2021-01-01",
      showWeekNumbers: true,
      showDropdowns: true,
      autoApply: false,
      linkedCalendars: true,
    };
  },
  methods: {
    updateValues(...args) {
      console.log(args);
    },
    checkOpen(...args) {
      console.log(args);
    },
    dateFormat(classes, date) {
      if (!classes.disabled) {
        classes.disabled = date.getTime() < new Date();
      }
      return classes;
    },
  },
  filters: {
    date(val) {
      return val ? val.toLocaleDateString() : "";
    },
  },
};
</script>

<style>
</style>
