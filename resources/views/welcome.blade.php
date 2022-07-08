<x-guest-layout>
    <main>
        <h1>Welcome</h1>
    <main>

    @push('scripts')
        @vite(['resources/js/push.js'], 'build/frontend')
    @endpush
</x-guest-layout>