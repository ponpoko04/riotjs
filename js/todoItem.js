<todo-item>
    <li each="{ items }">
        <label class="{ completed: done }">
            <input type="checkbox" checked="{ done }" onclick="{ parent.toggle }"> {title}
        </label>
    </li>
    
    <script>
        this.items = opts.items

        toggle(e) {
            var item = e.item
            item.done = !item.done
            return true
        }
    </script>
</todo-item>