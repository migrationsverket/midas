import{j as e}from"./iframe-DzMIb7Ox.js";import{$ as c}from"./Form-BrMVOI4Z.js";import{G as d}from"./Grid-Bq5vRib8.js";import{G as i}from"./GridItem-Dv8C1W80.js";import{T as t}from"./TextField-BcvXNIhq.js";import{S as l}from"./Select-BZKyqWXE.js";import{B as a}from"./Button-BHSCiAEx.js";import{R as x,a as u}from"./Radio-BqGfiX8Q.js";import{C as I}from"./CheckboxGroup-DkpozSJa.js";import{C as G}from"./Checkbox-Dh24LIbR.js";import{L as p}from"./ListBoxItem-DZrSl1HW.js";import"./preload-helper-PPVm8Dsz.js";import"./utils-Cdwe4BCh.js";import"./clsx-B-dksMZM.js";import"./useFormValidation-DiMAdNhw.js";import"./useFocusRing-BFU8EAFv.js";import"./index-DW-0uUM6.js";import"./index-Cl0FZxW_.js";import"./clsx-Ciqy0D92.js";import"./TextFieldBase-BDlq1KRa.js";import"./TextField-CDsJgs0y.js";import"./FieldError-DbxKaZYC.js";import"./Text-BBuKGEIS.js";import"./Text-CuzShXx2.js";import"./RSPContexts-DJiMJ6Uh.js";import"./Group-BYU8YkSb.js";import"./Input-CMnmmIuM.js";import"./Hidden-DAvjwAnA.js";import"./Button-Crwjj3sD.js";import"./useLabels-CeSEzTdd.js";import"./useButton-1toAChHK.js";import"./useTextField-ColjL6hN.js";import"./useControlledState-C6lxKGJg.js";import"./useField-ikIrFh80.js";import"./TextField.module-1-_3qsJZ.js";import"./Label-BXWQeB_I.js";import"./Dialog-B3GjjMvg.js";import"./OverlayArrow-Bwr_osth.js";import"./useResizeObserver-Dmvy1v7R.js";import"./Collection-BJHhLXCJ.js";import"./index-qS7KxFYS.js";import"./Separator-_fjjPMXC.js";import"./SelectionManager-ChKt8TQX.js";import"./useEvent-ZscvBuYj.js";import"./scrollIntoView-C77nXoWt.js";import"./SelectionIndicator-ClB5sx6g.js";import"./useDescription-BHWqtBw9.js";import"./ListKeyboardDelegate-DZs0j5nu.js";import"./PressResponder-BeY7CEEu.js";import"./useLocalizedStringFormatter-Cm24wEWc.js";import"./LocalizedStringFormatter-wnoc2RuQ.js";import"./getScrollParent-BMEE02Hx.js";import"./VisuallyHidden-BJydeYP9.js";import"./useLocalizedStringFormatter-zyVrsTaN.js";import"./x-tzBCnGcQ.js";import"./createLucideIcon-DxKoJQzX.js";import"./Heading-Br2mJzVB.js";import"./info-yWSDsxN-.js";import"./Popover-Y_gtzwk9.js";import"./intlStrings-ZMTSFH_M.js";import"./ListBox-DpkxbjVX.js";import"./DragAndDrop-D5fEWuex.js";import"./inertValue-B1UuNYf2.js";import"./useListState-3H5vRtcs.js";import"./Tag-C2mePKyw.js";import"./useHighlightSelectionDescription--qqlnP1d.js";import"./useUpdateEffect-a3rkpYT3.js";import"./useHasTabbableChild-DR2HsaOU.js";import"./chevron-down-C1RAaskA.js";import"./Button.module-CtQ1deO8.js";import"./check-WEGvVXOW.js";import"./useToggleState-BWAiTVNX.js";import"./Virtualizer-BRVJEW6A.js";const Xe={component:c,title:"Examples/Form",tags:["autodocs"],argTypes:{}},o={args:{},render:()=>{const m=["Banan","Apple","Mango"];return e.jsxs(d,{children:[e.jsx(i,{size:12,children:e.jsx(t,{label:"Ange ditt fullständiga namn",description:"Glöm inte dina eventuella mellannamn!"})}),e.jsx(i,{size:12,children:e.jsx(t,{label:"Personnummmer",description:"Anges på formen ÅÅMMDD-XXXX"})}),e.jsx(i,{size:12,children:e.jsx(l,{label:"Vilken är din favoritfrukt",placeholder:"Välj en frukt",selectionMode:"single",items:m.map(r=>({id:r,name:r})),children:r=>e.jsx(p,{...r,children:r.name})})}),e.jsx(i,{children:e.jsx(a,{children:"Skicka"})})]})}},s={args:{},render:()=>{const m=["A","B","C"],r=["Anledning A","Anledning B","Anledning C"];return e.jsx("div",{children:e.jsxs(d,{children:[e.jsx(i,{size:{xs:12,sm:6},children:e.jsx(x,{label:"Anledning",description:"Ange anledning till att du söker i databasen",children:r.map(n=>e.jsx(u,{value:n,children:n},n))})}),e.jsx(i,{size:{xs:12,sm:6},children:e.jsx(I,{label:"Databas",description:"Välj databas att söka i",children:m.map(n=>e.jsx(G,{value:n,children:n},n))})}),e.jsx(i,{size:{xs:12,sm:6},children:e.jsx(t,{label:"Namn",description:""})}),e.jsx(i,{size:{xs:12,sm:6},children:e.jsx(t,{label:"Personnummer"})}),e.jsx(i,{size:{xs:12,sm:6},children:e.jsx(l,{label:"Kön",description:"Kan lämnas tomt",placeholder:"Välj kön",selectionMode:"single",items:m.map(n=>({name:n,id:n})),children:n=>e.jsx(p,{...n,children:n.name})})}),e.jsx(i,{size:{xs:12,sm:6},children:e.jsx(t,{label:"Ärendekod"})}),e.jsx(i,{size:"auto",children:e.jsx(a,{children:"Sök"})}),e.jsx(i,{size:"auto",children:e.jsx(a,{variant:"secondary",children:"Rensa"})})]})})}};o.parameters={...o.parameters,docs:{...o.parameters?.docs,source:{originalSource:`{
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
