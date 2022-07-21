<x-guest-layout>
    <main>
        <h1 class="px-6 py-3 text-2xl text-white bg-gray-900">Welcome</h1>
    <main>

    @push('scripts')
        @vite(['resources/js/push.js'], 'build/frontend')
    @endpush
</x-guest-layout>