import { std } from 'tswow-stdlib'

const items = [
    46246,46245,46244,46243,46242,
]

for(const item of items) {
    std.Items.load(item).ClassMask.set(-1);
}