export class A {
    /** Prop docs */
    prop!: string;

    /** Run docs */
    run(): void {
        console.log("A");
    }
}

export class B extends A {
    prop!: "B";

    run(): void {
        super.run();
        console.log("B");
    }
}