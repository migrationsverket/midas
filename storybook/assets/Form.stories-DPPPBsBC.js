import{j as e}from"./iframe-Co0SsNj6.js";import{$ as c}from"./Form-BKJfkX3I.js";import{G as d}from"./Grid-BZKgiddM.js";import{G as i}from"./GridItem-BUn6fcK2.js";import{T as t}from"./TextField-BIoUX6uF.js";import{S as l}from"./Select-BykfcZrQ.js";import{B as a}from"./Button-6Dau2X37.js";import{R as x,a as u}from"./Radio-C0S5sszn.js";import{C as I}from"./CheckboxGroup-CE8C8oF-.js";import{C as G}from"./Checkbox-Bjy8dj4u.js";import{L as p}from"./ListBoxItem-DyIDaQpi.js";import"./preload-helper-PPVm8Dsz.js";import"./utils-DoIZJ7cj.js";import"./clsx-B-dksMZM.js";import"./useFormValidation-DXVxdhpA.js";import"./useFocusRing-9k5ozzKg.js";import"./index-D1rsIpeY.js";import"./index-DMENUWva.js";import"./clsx-Ciqy0D92.js";import"./TextFieldBase-9ie_uri3.js";import"./TextField-BlpZ5z-j.js";import"./FieldError-BD2HEwuR.js";import"./Text-4sNYTzks.js";import"./Text-BSTUUX0z.js";import"./RSPContexts-CrZ3ys4B.js";import"./Group-CnUSXpYb.js";import"./Input-B0TW0hOQ.js";import"./Hidden-CossIpZl.js";import"./Button-0-4Kgh6r.js";import"./useLabels-LGizr97P.js";import"./useButton-Cob-AGV8.js";import"./useTextField-CgD0NSef.js";import"./useControlledState-CAAFyILJ.js";import"./useField-C47SklL7.js";import"./TextField.module-CgqiUiYQ.js";import"./Label-C0IITPi0.js";import"./Dialog-CKF9-Ac4.js";import"./OverlayArrow-RtLaAtvr.js";import"./useResizeObserver-Btkcsgi2.js";import"./Collection-C0IDLnfh.js";import"./index-D0DFVPuZ.js";import"./Separator-CObRPdSZ.js";import"./SelectionManager-BMm7iJXk.js";import"./useEvent-DRV4VT7N.js";import"./scrollIntoView-CtWAMHuk.js";import"./SelectionIndicator-CF_YgRba.js";import"./useDescription-BDzmu5j_.js";import"./ListKeyboardDelegate-C4U2P3XN.js";import"./PressResponder-CTi1DIIf.js";import"./useLocalizedStringFormatter-BcSWiZ19.js";import"./LocalizedStringFormatter-wnoc2RuQ.js";import"./animation-CdvcH_Kd.js";import"./getScrollParent-Cpn7MDkE.js";import"./VisuallyHidden-m5iKMMV5.js";import"./x-DSoxV8Ho.js";import"./createLucideIcon-groEP49X.js";import"./useLocalizedStringFormatter-Cc2vZIqX.js";import"./Heading-BX87Ibq6.js";import"./info-DeWotBib.js";import"./Popover-CU9jXD-T.js";import"./intlStrings-ZMTSFH_M.js";import"./ListBox-DYmhTI2O.js";import"./DragAndDrop-BTPt1dRB.js";import"./inertValue-ByRg6RAT.js";import"./useListState-18tHSbqK.js";import"./Tag-CZjnxV_l.js";import"./useHighlightSelectionDescription-BHrLbz_O.js";import"./useUpdateEffect--eESCmAS.js";import"./useHasTabbableChild-Cumk4YpR.js";import"./chevron-down-Eg5GUEll.js";import"./Button.module-Co5e5YHp.js";import"./check-DLefdGke.js";import"./useToggleState-CO3ibt5X.js";import"./Virtualizer-DOdS922X.js";const Le={component:c,title:"Examples/Form",tags:["autodocs"],argTypes:{}},o={args:{},render:()=>{const m=["Banan","Apple","Mango"];return e.jsxs(d,{children:[e.jsx(i,{size:12,children:e.jsx(t,{label:"Ange ditt fullständiga namn",description:"Glöm inte dina eventuella mellannamn!"})}),e.jsx(i,{size:12,children:e.jsx(t,{label:"Personnummmer",description:"Anges på formen ÅÅMMDD-XXXX"})}),e.jsx(i,{size:12,children:e.jsx(l,{label:"Vilken är din favoritfrukt",placeholder:"Välj en frukt",selectionMode:"single",items:m.map(r=>({id:r,name:r})),children:r=>e.jsx(p,{...r,children:r.name})})}),e.jsx(i,{children:e.jsx(a,{children:"Skicka"})})]})}},s={args:{},render:()=>{const m=["A","B","C"],r=["Anledning A","Anledning B","Anledning C"];return e.jsx("div",{children:e.jsxs(d,{children:[e.jsx(i,{size:{xs:12,sm:6},children:e.jsx(x,{label:"Anledning",description:"Ange anledning till att du söker i databasen",children:r.map(n=>e.jsx(u,{value:n,children:n},n))})}),e.jsx(i,{size:{xs:12,sm:6},children:e.jsx(I,{label:"Databas",description:"Välj databas att söka i",children:m.map(n=>e.jsx(G,{value:n,children:n},n))})}),e.jsx(i,{size:{xs:12,sm:6},children:e.jsx(t,{label:"Namn",description:""})}),e.jsx(i,{size:{xs:12,sm:6},children:e.jsx(t,{label:"Personnummer"})}),e.jsx(i,{size:{xs:12,sm:6},children:e.jsx(l,{label:"Kön",description:"Kan lämnas tomt",placeholder:"Välj kön",selectionMode:"single",items:m.map(n=>({name:n,id:n})),children:n=>e.jsx(p,{...n,children:n.name})})}),e.jsx(i,{size:{xs:12,sm:6},children:e.jsx(t,{label:"Ärendekod"})}),e.jsx(i,{size:"auto",children:e.jsx(a,{children:"Sök"})}),e.jsx(i,{size:"auto",children:e.jsx(a,{variant:"secondary",children:"Rensa"})})]})})}};o.parameters={...o.parameters,docs:{...o.parameters?.docs,source:{originalSource:`{
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
