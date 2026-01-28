import{j as e}from"./iframe-CQYEjdz_.js";import{$ as c}from"./Form-C3zHxAYs.js";import{G as d}from"./Grid-BNBGBr7I.js";import{G as i}from"./GridItem-OhKfZl6o.js";import{T as t}from"./TextField-8UwVn-qq.js";import{S as l}from"./Select-DvKqPyrC.js";import{B as a}from"./Button-Cg9zZZ7J.js";import{R as x,a as u}from"./Radio-C1E1KM7C.js";import{C as I}from"./CheckboxGroup-CUJhWmyW.js";import{C as G}from"./Checkbox-D35ahYK3.js";import{L as p}from"./ListBoxItem-IdV0eKo9.js";import"./preload-helper-PPVm8Dsz.js";import"./utils-CsTu9ikS.js";import"./clsx-B-dksMZM.js";import"./useFormValidation-CFo8G_qj.js";import"./useFocusRing-DlWhQp2A.js";import"./index-Vqw8ZxGg.js";import"./index-COoMP5iC.js";import"./clsx-Ciqy0D92.js";import"./TextFieldBase-BXlaql8J.js";import"./TextField-CKhA4AA4.js";import"./FieldError-DI5FZj2R.js";import"./Text-D3mzemNj.js";import"./Text-C9HsrLdv.js";import"./RSPContexts-CSrO3WzH.js";import"./Group-Yg1GwsIt.js";import"./Input-DbdeXgaZ.js";import"./Hidden-4CIPvtTu.js";import"./Button-CvToZ011.js";import"./useLabels-h4L6WHo6.js";import"./useButton-BvkZHVI6.js";import"./useTextField-CUnPMd7N.js";import"./useControlledState-08K4jq70.js";import"./useField-6eaY4RPJ.js";import"./TextField.module-1fNSVGjT.js";import"./Label-CwePbPJo.js";import"./Dialog-DAlZfEPF.js";import"./OverlayArrow-B4ro6Pni.js";import"./useResizeObserver-BD123XaL.js";import"./Collection-BAUdRdO0.js";import"./index-Ca1-4qPN.js";import"./Separator-B4Jqf19c.js";import"./SelectionManager-DPVZxLwg.js";import"./useEvent-BdUP91sh.js";import"./scrollIntoView-CtWAMHuk.js";import"./SelectionIndicator-kTOIYhGF.js";import"./useDescription-CR3C3alu.js";import"./ListKeyboardDelegate-C62sOce2.js";import"./PressResponder-CFUlCqbp.js";import"./useLocalizedStringFormatter-D_GTQ1_w.js";import"./LocalizedStringFormatter-wnoc2RuQ.js";import"./animation-nxFZqJiI.js";import"./getScrollParent-Cpn7MDkE.js";import"./VisuallyHidden-CRBj22op.js";import"./x-BbpD6m52.js";import"./createLucideIcon-B-IrTLpd.js";import"./useLocalizedStringFormatter-Nl9tDDDD.js";import"./Heading-Bj5hgxJD.js";import"./info-DjSzIBk8.js";import"./Popover-Cigo6uiU.js";import"./intlStrings-ZMTSFH_M.js";import"./ListBox-D1DHMiRY.js";import"./DragAndDrop-DIWh8baA.js";import"./inertValue-C31qLkaN.js";import"./useListState-C4yvhWzI.js";import"./Tag-BvGaxhNb.js";import"./useHighlightSelectionDescription-ByF3Tlw7.js";import"./useUpdateEffect-B3-QfnnS.js";import"./useHasTabbableChild-DwcsJ6a7.js";import"./chevron-down-CIAfX3KR.js";import"./Button.module-Co5e5YHp.js";import"./check-CgmrGzBx.js";import"./useToggleState-J4GUc0sY.js";import"./Virtualizer-C6yi0VIX.js";const Le={component:c,title:"Examples/Form",tags:["autodocs"],argTypes:{}},o={args:{},render:()=>{const m=["Banan","Apple","Mango"];return e.jsxs(d,{children:[e.jsx(i,{size:12,children:e.jsx(t,{label:"Ange ditt fullständiga namn",description:"Glöm inte dina eventuella mellannamn!"})}),e.jsx(i,{size:12,children:e.jsx(t,{label:"Personnummmer",description:"Anges på formen ÅÅMMDD-XXXX"})}),e.jsx(i,{size:12,children:e.jsx(l,{label:"Vilken är din favoritfrukt",placeholder:"Välj en frukt",selectionMode:"single",items:m.map(r=>({id:r,name:r})),children:r=>e.jsx(p,{...r,children:r.name})})}),e.jsx(i,{children:e.jsx(a,{children:"Skicka"})})]})}},s={args:{},render:()=>{const m=["A","B","C"],r=["Anledning A","Anledning B","Anledning C"];return e.jsx("div",{children:e.jsxs(d,{children:[e.jsx(i,{size:{xs:12,sm:6},children:e.jsx(x,{label:"Anledning",description:"Ange anledning till att du söker i databasen",children:r.map(n=>e.jsx(u,{value:n,children:n},n))})}),e.jsx(i,{size:{xs:12,sm:6},children:e.jsx(I,{label:"Databas",description:"Välj databas att söka i",children:m.map(n=>e.jsx(G,{value:n,children:n},n))})}),e.jsx(i,{size:{xs:12,sm:6},children:e.jsx(t,{label:"Namn",description:""})}),e.jsx(i,{size:{xs:12,sm:6},children:e.jsx(t,{label:"Personnummer"})}),e.jsx(i,{size:{xs:12,sm:6},children:e.jsx(l,{label:"Kön",description:"Kan lämnas tomt",placeholder:"Välj kön",selectionMode:"single",items:m.map(n=>({name:n,id:n})),children:n=>e.jsx(p,{...n,children:n.name})})}),e.jsx(i,{size:{xs:12,sm:6},children:e.jsx(t,{label:"Ärendekod"})}),e.jsx(i,{size:"auto",children:e.jsx(a,{children:"Sök"})}),e.jsx(i,{size:"auto",children:e.jsx(a,{variant:"secondary",children:"Rensa"})})]})})}};o.parameters={...o.parameters,docs:{...o.parameters?.docs,source:{originalSource:`{
  args: {},
  render: () => {
    const ITEMS = ['Banan', 'Apple', 'Mango'];
    return <Grid>
        <GridItem size={12}>
          <TextField label='Ange ditt fullständiga namn' description='Glöm inte dina eventuella mellannamn!' />
        </GridItem>
        <GridItem size={12}>
          <TextField label='Personnummmer' description='Anges på formen ÅÅMMDD-XXXX' />
        </GridItem>
        <GridItem size={12}>
          <Select label='Vilken är din favoritfrukt' placeholder='Välj en frukt' selectionMode='single' items={ITEMS.map(i => ({
          id: i,
          name: i
        }))}>
            {item => <ListBoxItem {...item}>{item.name}</ListBoxItem>}
          </Select>
        </GridItem>

        <GridItem>
          <Button>Skicka</Button>
        </GridItem>
      </Grid>;
  }
}`,...o.parameters?.docs?.source}}};s.parameters={...s.parameters,docs:{...s.parameters?.docs,source:{originalSource:`{
  args: {},
  render: () => {
    const ITEMS = ['A', 'B', 'C'];
    const RADIOITEMS = ['Anledning A', 'Anledning B', 'Anledning C'];
    return <div>
        <Grid>
          <GridItem size={{
          xs: 12,
          sm: 6
        }}>
            <RadioGroup label='Anledning' description='Ange anledning till att du söker i databasen'>
              {RADIOITEMS.map((item: string) => <Radio value={item} key={item}>
                  {item}
                </Radio>)}
            </RadioGroup>
          </GridItem>
          <GridItem size={{
          xs: 12,
          sm: 6
        }}>
            <CheckboxGroup label='Databas' description='Välj databas att söka i'>
              {ITEMS.map((item: string) => <Checkbox value={item} key={item}>
                  {item}
                </Checkbox>)}
            </CheckboxGroup>
          </GridItem>
          <GridItem size={{
          xs: 12,
          sm: 6
        }}>
            <TextField label='Namn' description='' />
          </GridItem>
          <GridItem size={{
          xs: 12,
          sm: 6
        }}>
            <TextField label='Personnummer' />
          </GridItem>

          <GridItem size={{
          xs: 12,
          sm: 6
        }}>
            <Select label='Kön' description='Kan lämnas tomt' placeholder='Välj kön' selectionMode='single' items={ITEMS.map(i => ({
            name: i,
            id: i
          }))}>
              {item => <ListBoxItem {...item}>{item.name}</ListBoxItem>}
            </Select>
          </GridItem>
          <GridItem size={{
          xs: 12,
          sm: 6
        }}>
            <TextField label='Ärendekod' />
          </GridItem>

          <GridItem size='auto'>
            <Button>Sök</Button>
          </GridItem>
          <GridItem size='auto'>
            <Button variant='secondary'>Rensa</Button>
          </GridItem>
        </Grid>
      </div>;
  }
}`,...s.parameters?.docs?.source}}};const ye=["SimpleForm","TwoColumnForm"];export{o as SimpleForm,s as TwoColumnForm,ye as __namedExportsOrder,Le as default};
