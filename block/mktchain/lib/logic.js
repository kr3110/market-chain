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
    console.log(contract.seller.accountBalance );
    console.log(contract.buyer.accountBalance )  ;
    // update the buyes's
    const buyerRegistry = await getParticipantRegistry('org.example.mktchain.Business');
    await buyerrRegistry.update(contract.buyer);

    // update the sellers's balance
    const sellerRegistry = await getParticipantRegistry('org.example.mktchain.Business');
    await sellerRegistry.update(contract.seller);
}
