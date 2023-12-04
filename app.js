window.addEventListener('load', solve);

function solve() {

        const carModelRef = document.getElementById('car-model')
        const carYearRef = document.getElementById('car-year')
        const partNameRef = document.getElementById('part-name')
        const partNumberRef = document.getElementById('part-number')
        const conditionRef = document.getElementById('condition')
        const nextBtn = document.getElementById('next-btn')

        nextBtn.addEventListener('click', onNext)



        function onNext(e) {

                if (carModelRef.value == '' || carYearRef.value == '' || partNameRef.value == '' || partNumberRef.value == '' || conditionRef.value == '') {
                        return
                }

                if (Number(document.getElementById('car-year').value) < 1980 || Number(document.getElementById('car-year').value) > 2023) {
                        return
                }






                e.preventDefault()
                nextBtn.disabled = true
                const partInfoSectionRef = document.getElementById('part-info')
                const partInfoUl = document.querySelector('.info-list')
                const partInfoLi = document.createElement('li')
                partInfoLi.className = 'part-content'
                partInfoUl.appendChild(partInfoLi)

                const image = document.getElementById('complete-img')
                image.style.visibility = 'hidden'
                const completeText = document.getElementById('complete-text')
                completeText.textContent = ''

                const partInfoArticle = document.createElement('article')
                partInfoLi.appendChild(partInfoArticle)

                const value1 = carModelRef.value
                const value2 = carYearRef.value
                const value3 = partNameRef.value
                const value4 = partNumberRef.value
                const value5 = conditionRef.value

                const partInfoObj = {
                        'Car Model': carModelRef.value,
                        'Car Year': carYearRef.value,
                        'Part Name': partNameRef.value,
                        'Part Number': partNumberRef.value,
                        'Condition': conditionRef.value
                }

                Object.entries(partInfoObj).forEach(entry => {
                        const partInfoP = document.createElement('p')
                        partInfoP.textContent = `${entry[0]}: ${entry[1]}`
                        partInfoArticle.appendChild(partInfoP)
                })

                carModelRef.value = ''
                carYearRef.value = ''
                partNameRef.value = ''
                partNumberRef.value = ''
                conditionRef.value = ''

                const editBtn = document.createElement('button')
                editBtn.textContent = 'Edit'
                editBtn.className = 'edit-btn'
                partInfoLi.appendChild(editBtn)

                const continueBtn = document.createElement('button')
                continueBtn.textContent = 'Continue'
                continueBtn.className = 'continue-btn'
                partInfoLi.appendChild(continueBtn)

                editBtn.addEventListener('click', onEdit)

                function onEdit(e) {

                        nextBtn.disabled = false

                        carModelRef.value = value1
                        carYearRef.value = value2
                        partNameRef.value = value3
                        partNumberRef.value = value4
                        conditionRef.value = value5

                        partInfoLi.remove()
                }

                continueBtn.addEventListener('click', onContinue)

                function onContinue(e) {

                        const confirmInfoUl = document.getElementsByClassName('confirm-list')[0]
                        const confirmInfoLi = document.createElement('li')
                        confirmInfoLi.className = 'part-content'
                        confirmInfoUl.appendChild(confirmInfoLi)
                        const confirmArticle = document.createElement('article')
                        confirmInfoLi.appendChild(confirmArticle)


                        const confirmInfoObj = {
                                'Car Model': value1,
                                'Car Year': value2,
                                'Part Name': value3,
                                'Part Number': value4,
                                'Condition': value5
                        }

                        Object.entries(confirmInfoObj).forEach(entry => {
                                const confirmP = document.createElement('p')
                                confirmP.textContent = `${entry[0]}: ${entry[1]}`
                                confirmArticle.appendChild(confirmP)
                        })

                        partInfoLi.remove()

                        const confirmBtn = document.createElement('button')
                        confirmBtn.textContent = 'Confirm'
                        confirmBtn.className = 'confirm-btn'
                        confirmInfoLi.appendChild(confirmBtn)

                        const cancelBtn = document.createElement('button')
                        cancelBtn.textContent = 'Cancel'
                        cancelBtn.className = 'cancel-btn'
                        confirmInfoLi.appendChild(cancelBtn)

                        confirmBtn.addEventListener('click', onConfirm)

                        function onConfirm(e) {

                                confirmInfoLi.remove()
                                nextBtn.disabled = false
                                image.style.visibility = 'visible'
                                completeText.textContent = 'Part is Ordered!'

                        }

                        cancelBtn.addEventListener('click', onCancel)

                        function onCancel(e) {

                                confirmInfoLi.remove()
                                nextBtn.disabled = false
                        }

                }

        }

}