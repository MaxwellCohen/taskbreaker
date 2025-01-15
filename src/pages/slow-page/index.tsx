import { SlowComponent } from "@/components/SlowComponent";

export const dynamic = 'force-dynamic';


export default function Home() {


    return (
        <div
        >
            <h1> Slow page </h1>
            <SlowComponent >
                <SlowComponent >
                    <SlowComponent >
                        <SlowComponent >
                            <SlowComponent >
                                <SlowComponent >
                                    <SlowComponent >
                                    </SlowComponent>
                                </SlowComponent>
                            </SlowComponent>
                        </SlowComponent>
                    </SlowComponent>
                </SlowComponent>
            </SlowComponent>

        </div>
    );
}


