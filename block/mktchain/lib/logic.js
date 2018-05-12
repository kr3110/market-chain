/**
 * A shipment has been received by an importer
 * @param {org.example.mktchain.ShipmentReceived} shipmentReceived - the ShipmentReceived transaction
 * @transaction
 */
async function payOut(shipmentReceived) {  // eslint-disable-line no-unused-vars

    const contract = shipmentReceived.shipment.contract;
    const shipment = shipmentReceived.shipment;
    let payOut = shipmentReceived.shipment.shipmentPrice;

    // set the status of the shipment
    shipment.status = 'ARRIVED';

    console.log('Payout: ' + payOut);
    contract.seller.accountBalance += payOut;
    contract.buyer.accountBalance -= payOut;

    console.log('buyer: ' + contract.buyer.$identifier + ' new balance: ' + contract.buyer.accountBalance);
    console.log('Seller: ' + contract.seller.$identifier + ' new balance: ' + contract.seller.accountBalance);

    // update the grower's balance
    const growerRegistry = await getParticipantRegistry('org.example.mktchain.Business');
    await growerRegistry.update(contract.buyer);

    // update the importer's balance
    const importerRegistry = await getParticipantRegistry('org.example.mktchain.Business');
    await importerRegistry.update(contract.seller);
}
