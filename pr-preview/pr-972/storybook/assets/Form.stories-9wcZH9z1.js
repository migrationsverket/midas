import{j as e}from"./iframe-BtnDiUeo.js";import{$ as c}from"./Form-DhyVklo3.js";import{G as d}from"./Grid-DZySGnwK.js";import{G as i}from"./GridItem-dLkTp6dw.js";import{T as t}from"./TextField-Ce7jgZnB.js";import{S as l}from"./Select-CNURowVk.js";import{B as a}from"./Button-COsxIDgV.js";import{R as x,a as u}from"./Radio-CxfkW9kM.js";import{C as I}from"./CheckboxGroup-Cd2kWRd-.js";import{C as G}from"./Checkbox-D8tT4YDm.js";import{L as p}from"./ListBoxItem-C2sK-Oir.js";import"./preload-helper-PPVm8Dsz.js";import"./utils-6t5S5iG-.js";import"./clsx-B-dksMZM.js";import"./useFormValidation-QJMhqtMl.js";import"./useFocusRing-CeaXn4pv.js";import"./index-DNj_r2ie.js";import"./index-CMMeM23Q.js";import"./clsx-Ciqy0D92.js";import"./TextFieldBase-C21Bgrzo.js";import"./TextField-BaQJW_Dw.js";import"./FieldError-BwMKPYqO.js";import"./Text-BHP3jDdS.js";import"./Text-5ETkJBTM.js";import"./RSPContexts-DIOS6Ojx.js";import"./Group-Bts_purp.js";import"./Input-BWhq-5uD.js";import"./Hidden-SeEFEyCD.js";import"./Button-C4A3JbkV.js";import"./useLabels-L9u9tUn5.js";import"./useButton-Dj3Yiida.js";import"./useTextField-LlEhU_rz.js";import"./useControlledState-BMBk6NmG.js";import"./useField-Cbo48EzZ.js";import"./TextField.module-CgqiUiYQ.js";import"./Label-C1by7kx7.js";import"./Dialog-BlQvHMfi.js";import"./OverlayArrow-Dyw6ueAU.js";import"./useResizeObserver-IKiumAb0.js";import"./Collection-Bs_M3g-9.js";import"./index-D8rcrMqJ.js";import"./Separator-CJlTHlzH.js";import"./SelectionManager-BoO8dgsX.js";import"./useEvent--JaFozHk.js";import"./scrollIntoView-BzmlEbl8.js";import"./SelectionIndicator-rrxign9m.js";import"./useDescription-BYAmENSk.js";import"./ListKeyboardDelegate-ClLuk8-x.js";import"./PressResponder-CLcoXyel.js";import"./useLocalizedStringFormatter-BfXnVgGt.js";import"./LocalizedStringFormatter-wnoc2RuQ.js";import"./getScrollParent-DJqeFeZI.js";import"./VisuallyHidden-DyHyzLz4.js";import"./x-D8AFAqJa.js";import"./createLucideIcon-Cyxnybqj.js";import"./useLocalizedStringFormatter-6oMJ6jzu.js";import"./Heading-Dld2UxcG.js";import"./info-CqikwjWj.js";import"./Popover-DAHUnuwF.js";import"./intlStrings-ZMTSFH_M.js";import"./ListBox-DYQlbkrE.js";import"./DragAndDrop-BUfYYbwY.js";import"./inertValue-B-0axL3R.js";import"./useListState-C6CfQ_5E.js";import"./Tag-DzDqMAAw.js";import"./useHighlightSelectionDescription-Db_BgO-L.js";import"./useUpdateEffect-ByhImuU4.js";import"./useHasTabbableChild-8qi9vzjM.js";import"./chevron-down-CKkHaoiX.js";import"./Button.module-Co5e5YHp.js";import"./check-Bt5O6WbP.js";import"./useToggleState-Ayr1wJoP.js";import"./Virtualizer-Pyopvx3w.js";const Xe={component:c,title:"Examples/Form",tags:["autodocs"],argTypes:{}},o={args:{},render:()=>{const m=["Banan","Apple","Mango"];return e.jsxs(d,{children:[e.jsx(i,{size:12,children:e.jsx(t,{label:"Ange ditt fullständiga namn",description:"Glöm inte dina eventuella mellannamn!"})}),e.jsx(i,{size:12,children:e.jsx(t,{label:"Personnummmer",description:"Anges på formen ÅÅMMDD-XXXX"})}),e.jsx(i,{size:12,children:e.jsx(l,{label:"Vilken är din favoritfrukt",placeholder:"Välj en frukt",selectionMode:"single",items:m.map(r=>({id:r,name:r})),children:r=>e.jsx(p,{...r,children:r.name})})}),e.jsx(i,{children:e.jsx(a,{children:"Skicka"})})]})}},s={args:{},render:()=>{const m=["A","B","C"],r=["Anledning A","Anledning B","Anledning C"];return e.jsx("div",{children:e.jsxs(d,{children:[e.jsx(i,{size:{xs:12,sm:6},children:e.jsx(x,{label:"Anledning",description:"Ange anledning till att du söker i databasen",children:r.map(n=>e.jsx(u,{value:n,children:n},n))})}),e.jsx(i,{size:{xs:12,sm:6},children:e.jsx(I,{label:"Databas",description:"Välj databas att söka i",children:m.map(n=>e.jsx(G,{value:n,children:n},n))})}),e.jsx(i,{size:{xs:12,sm:6},children:e.jsx(t,{label:"Namn",description:""})}),e.jsx(i,{size:{xs:12,sm:6},children:e.jsx(t,{label:"Personnummer"})}),e.jsx(i,{size:{xs:12,sm:6},children:e.jsx(l,{label:"Kön",description:"Kan lämnas tomt",placeholder:"Välj kön",selectionMode:"single",items:m.map(n=>({name:n,id:n})),children:n=>e.jsx(p,{...n,children:n.name})})}),e.jsx(i,{size:{xs:12,sm:6},children:e.jsx(t,{label:"Ärendekod"})}),e.jsx(i,{size:"auto",children:e.jsx(a,{children:"Sök"})}),e.jsx(i,{size:"auto",children:e.jsx(a,{variant:"secondary",children:"Rensa"})})]})})}};o.parameters={...o.parameters,docs:{...o.parameters?.docs,source:{originalSource:`{
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
}`,...s.parameters?.docs?.source}}};const Le=["SimpleForm","TwoColumnForm"];export{o as SimpleForm,s as TwoColumnForm,Le as __namedExportsOrder,Xe as default};
