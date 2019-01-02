self.addEventListener('push', e => {
    console.log(123, e.data.text());
});

self.addEventListener('push', e => {
    console.log(456, e, self);
    sendMessageToWindowClients_();
});

self.addEventListener('message', e => {
    console.log('sw got msg!', e);
})

async function sendMessageToWindowClients_() {
    const clientList = await getClientList();
    console.log('clientList', clientList);
    clientList[1].postMessage('message');
    // await Promise.all(
    //     clientList.map(client =>
    //         client.postMessage('message')
    //     )
    // );
}

function getClientList() {
    return self.clients.matchAll({
        type: 'window',
        includeUncontrolled: true
        // TS doesn't know that "type: 'window'" means it'll return WindowClient[]
    });
}
