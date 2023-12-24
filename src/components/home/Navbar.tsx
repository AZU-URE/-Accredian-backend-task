"use client";
import Image from "next/image";
import { useState } from "react";
import { GiHamburgerMenu } from "react-icons/gi";
import { IoClose } from "react-icons/io5";
import { ConnectButton } from "@rainbow-me/rainbowkit";
interface btnTitle {
  title: string;
}
export default function Navbar(data: btnTitle) {
  const [visible, setVisible] = useState(false);
  const onClickHamburger = () => {
    console.log(visible);
    setVisible((value) => !value);
  };
  return (
    <nav className="flex justify-between items-center mb-10 backdrop-blur-3xl bg-white bg-opacity-5 p-5 px-10 w-full">
      <div className="flex items-center space-x-2">
        <Image src={"/logo.svg"} height={32} width={32} alt="logo" />
        <p className="text-white font-michroma">0xArchitect</p>
      </div>
      <div
        className="md:hidden flex items-center text-white cursor-pointer"
        onClick={onClickHamburger}
      >
        {!visible ? (
          <GiHamburgerMenu style={{ fontSize: "25px" }} />
        ) : (
          <IoClose style={{ fontSize: "30px" }} />
        )}
      </div>
      <div className="text-white font-questrial md:flex hidden items-center space-x-14 ">
        <p>Services</p>
        <p>Project</p>
        <p>Teams</p>
      </div>
      <div className="md:flex md:flex-col hidden p-2 px-3 text-white font-questrial bg-white bg-opacity-30 rounded-lg">
        {/* <ConnectButton
          accountStatus="address"
          chainStatus="none"
          label="Connect"
        /> */}
        <ConnectButton.Custom>
          {({
            account,
            chain,
            openAccountModal,
            openChainModal,
            openConnectModal,
            mounted,
          }) => {
            return (
              <div
                {...(!mounted && {
                  "aria-hidden": true,
                  style: {
                    opacity: 0,
                    pointerEvents: "none",
                    userSelect: "none",
                  },
                })}
              >
                {(() => {
                  if (!mounted || !account || !chain) {
                    return (
                      <button onClick={openConnectModal} type="button">
                        Connect Wallet
                      </button>
                    );
                  }

                  if (chain.unsupported) {
                    return (
                      <button onClick={openChainModal} type="button">
                        Wrong network
                      </button>
                    );
                  }

                  return (
                    <div style={{ display: "flex", gap: 12 }}>
                      <button
                        onClick={openChainModal}
                        style={{
                          display: "flex",
                          alignItems: "center",
                        }}
                        type="button"
                      >
                        {chain.hasIcon && (
                          <div
                            style={{
                              background: chain.iconBackground,
                              width: 12,
                              height: 12,
                              borderRadius: 999,
                              overflow: "hidden",
                              marginRight: 4,
                            }}
                          >
                            {chain.iconUrl && (
                              <Image
                                alt={chain.name ?? "Chain icon"}
                                src={chain.iconUrl}
                                width={12}
                                height={12}
                              />
                            )}
                          </div>
                        )}
                        {chain.name}
                      </button>

                      <button onClick={openAccountModal} type="button">
                        {account.displayName}
                        {account.displayBalance
                          ? ` (${account.displayBalance})`
                          : ""}
                      </button>
                    </div>
                  );
                })()}
              </div>
            );
          }}
        </ConnectButton.Custom>
        {/* <button className="p-2 px-3 text-white font-questrial bg-white bg-opacity-30 rounded-lg">
          <p>{data.title}</p>
        </button> */}
      </div>
    </nav>
  );
}
