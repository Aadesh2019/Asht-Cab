<template>
<span><v-container fluid>
    <!-- Page Heading -->
    <v-card class="mb-4" style="border-radius: 12px;">
      <v-card-title style="font-size: 28px; font-weight: bold;">Money Management System</v-card-title>
    </v-card>

    <!-- Total Transactions Table -->
    <v-card style="margin-bottom: 24px; border-radius: 12px;">
      <v-card-title style="font-size: 24px; font-weight: bold;">Total Transactions</v-card-title>
      <v-data-table
        :headers="transactionHeaders"
        :items="totalTransactions"
        class="elevation-1"
        style="border-radius: 12px;"
      ></v-data-table>
    </v-card>

    <!-- Confirmed Transactions Table -->
    <v-card style="margin-bottom: 24px; border-radius: 12px;">
      <v-card-title style="font-size: 24px; font-weight: bold;">Confirmed Transactions</v-card-title>
      <v-data-table
        :headers="transactionHeaders"
        :items="confirmedTransactions"
        class="elevation-1"
        style="border-radius: 12px;"
      ></v-data-table>
    </v-card>

    <!-- Pending Transactions Table -->
    <v-card style="margin-bottom: 24px; border-radius: 12px;">
      <v-card-title style="font-size: 24px; font-weight: bold;">Pending Transactions</v-card-title>
      <v-data-table
        :headers="transactionHeaders"
        :items="pendingTransactions"
        class="elevation-1"
        style="border-radius: 12px;"
      ></v-data-table>
    </v-card>

    <!-- Cancelled Transactions Table -->
    <v-card style="border-radius: 12px;">
      <v-card-title style="font-size: 24px; font-weight: bold;">Cancelled Transactions</v-card-title>
      <v-data-table
        :headers="transactionHeaders"
        :items="cancelledTransactions"
        class="elevation-1"
        style="border-radius: 12px;"
      ></v-data-table>
    </v-card>
</v-container>



</span>
</template>
<script>
 export default {

  data() {
    return {
      // Table headers for transaction data
      transactionHeaders: [
        { text: "Transaction ID", value: "id" },
        { text: "Amount", value: "amount" },
        { text: "Status", value: "status" },
        { text: "Date", value: "date" },
      ],

      // Total transactions data
      totalTransactions: [
        { id: "T001", amount: "₹5000", status: "Confirmed", date: "2025-01-10" },
        { id: "T002", amount: "₹3000", status: "Pending", date: "2025-01-11" },
        { id: "T003", amount: "₹4500", status: "Cancelled", date: "2025-01-12" },
      ],

      // Confirmed transactions data
      confirmedTransactions: [
        { id: "T001", amount: "₹5000", status: "Confirmed", date: "2025-01-10" },
      ],

      // Pending transactions data
      pendingTransactions: [
        { id: "T002", amount: "₹3000", status: "Pending", date: "2025-01-11" },
      ],

      // Cancelled transactions data
      cancelledTransactions: [
        { id: "T003", amount: "₹4500", status: "Cancelled", date: "2025-01-12" },
      ],
    };
  },

}
</script>
<style>
</style>