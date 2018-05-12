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

    contract.seller.accountBalance += payOut;
    contract.buyer.accountBalance -= payOut;

    // update the buyes's
    const growerRegistry = await getParticipantRegistry('org.example.mktchain.Business');
    await growerRegistry.update(contract.buyer);

    // update the sellers's balance
    const importerRegistry = await getParticipantRegistry('org.example.mktchain.Business');
    await importerRegistry.update(contract.seller);
}
