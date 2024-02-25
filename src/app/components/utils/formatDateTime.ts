function formatDateTime(date: Date): string[] {
  // Returns 2 strings: the date and the time
    return [date.toDateString(), date.toTimeString()];
}