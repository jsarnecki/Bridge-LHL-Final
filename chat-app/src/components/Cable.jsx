import React, { Fragment } from "react";
// import { ActionCable } from "react-actioncable-provider";
import { ActionCableConsumer } from "@thrash-industries/react-actioncable-provider";

const Cable = ({ conversations, handleReceivedMessage }) => {
	return (
		<Fragment>
			{conversations.map(conversation => {
				return (
					<ActionCableConsumer
						key={conversation.id}
						channel={{
							channel: "MessagesChannel",
							conversation: conversation.id,
						}}
						onReceived={handleReceivedMessage}
						onConnected={() => alert("message connected")}
					/>
				);
			})}
		</Fragment>
	);
};

export default Cable;
