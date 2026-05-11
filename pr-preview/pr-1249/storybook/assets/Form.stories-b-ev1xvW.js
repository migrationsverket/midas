import{j as e}from"./iframe-BaDPacjd.js";import{c}from"./Form-oBhPq7WZ.js";import{G as d}from"./Grid-C9oF3X5K.js";import{G as i}from"./GridItem-D7xxbGJ5.js";import{a as x,R as u}from"./Radio-CXaQLSe-.js";import{C as I}from"./CheckboxGroup-CwiRMYLV.js";import{C as G}from"./Checkbox-CZA569Uq.js";import{T as t}from"./TextField-nOhUobmx.js";import{S as l}from"./Select-CIjmMjd-.js";import{L as p}from"./ListBoxItem-D98Tp4eh.js";import{B as a}from"./Button-BbMcm-s_.js";import"./preload-helper-PPVm8Dsz.js";import"./useFocusRing-CU-3-Yvs.js";import"./utils-DIlgsg9w.js";import"./clsx-B-dksMZM.js";import"./index-Nc8_JSKj.js";import"./index-DARPjNQR.js";import"./clsx-Ciqy0D92.js";import"./Group-DLvsScbU.js";import"./FieldError-CCoQDHBS.js";import"./Text-D9IIAziF.js";import"./Text-maDwTHxG.js";import"./Button-xqG4BSxe.js";import"./Hidden-wYkIMllK.js";import"./useLabel-CEPds_v5.js";import"./useLabels-DVtm5qiG.js";import"./useButton-CWKA-NcB.js";import"./SelectionIndicator-E2Oo2YPO.js";import"./useField-DIToGq9j.js";import"./VisuallyHidden-Cc7_mEU0.js";import"./useControlledState-C7Qyb7bs.js";import"./Label-BG4tYNy3.js";import"./Dialog-BYeY2Kq4.js";import"./RSPContexts-Q8mL0bRp.js";import"./OverlayArrow-Dxq5i1Js.js";import"./useResizeObserver-BMJo5MZf.js";import"./Collection-DwVoD4ZF.js";import"./index-zgqX2Yvv.js";import"./Separator-CkGYv_lX.js";import"./SelectionManager-CWk_F_tK.js";import"./useEvent-DWbcd_98.js";import"./scrollIntoView-DP2ELaPl.js";import"./useDescription-4MxSlUac.js";import"./ListKeyboardDelegate-BvsWrhNC.js";import"./PressResponder-D4J1Z43q.js";import"./useLocalizedStringFormatter-D18yrwwN.js";import"./LocalizedStringFormatter-wnoc2RuQ.js";import"./animation-CoR0ZV4_.js";import"./getScrollParent-CQLO__Ec.js";import"./ModalOverlay-CMvAZP1n.js";import"./x-CIJW-8OQ.js";import"./createLucideIcon-Cn3KNUPN.js";import"./useLocalizedStringFormatter-B8-NJo2o.js";import"./Heading-Bf9R16Cd.js";import"./info-Bgk1qFK4.js";import"./Popover-DUTsRoUU.js";import"./check-Bzjymqaq.js";import"./useToggleState-Bz_hR2Az.js";import"./TextFieldBase-Da4npc_I.js";import"./Input-BrXEUkLM.js";import"./useTextField-BfD0yxsi.js";import"./TextField.module-DdivwlC8.js";import"./intlStrings-ZMTSFH_M.js";import"./ListBox-ukclhtFQ.js";import"./DragAndDrop-DfQctP2N.js";import"./inertValue-sQ4tLOnZ.js";import"./useListState-AGFTBAzW.js";import"./TagGroup-DHQlB6Us.js";import"./useHighlightSelectionDescription-C8-vArFp.js";import"./useUpdateEffect-BOi3uH8F.js";import"./useHasTabbableChild-DoTSyXXA.js";import"./chevron-down-CSvrQf-B.js";import"./Virtualizer-0FgHUScO.js";import"./Button.module-BB7N-cLd.js";const Le={component:c,title:"Examples/Form",tags:["autodocs"],argTypes:{}},o={args:{},render:()=>{const m=["Banan","Apple","Mango"];return e.jsxs(d,{children:[e.jsx(i,{size:12,children:e.jsx(t,{label:"Ange ditt fullständiga namn",description:"Glöm inte dina eventuella mellannamn!"})}),e.jsx(i,{size:12,children:e.jsx(t,{label:"Personnummmer",description:"Anges på formen ÅÅMMDD-XXXX"})}),e.jsx(i,{size:12,children:e.jsx(l,{label:"Vilken är din favoritfrukt",placeholder:"Välj en frukt",selectionMode:"single",items:m.map(r=>({id:r,name:r})),children:r=>e.jsx(p,{...r,children:r.name})})}),e.jsx(i,{children:e.jsx(a,{children:"Skicka"})})]})}},s={args:{},render:()=>{const m=["A","B","C"],r=["Anledning A","Anledning B","Anledning C"];return e.jsx("div",{children:e.jsxs(d,{children:[e.jsx(i,{size:{xs:12,sm:6},children:e.jsx(x,{label:"Anledning",description:"Ange anledning till att du söker i databasen",children:r.map(n=>e.jsx(u,{value:n,children:n},n))})}),e.jsx(i,{size:{xs:12,sm:6},children:e.jsx(I,{label:"Databas",description:"Välj databas att söka i",children:m.map(n=>e.jsx(G,{value:n,children:n},n))})}),e.jsx(i,{size:{xs:12,sm:6},children:e.jsx(t,{label:"Namn",description:""})}),e.jsx(i,{size:{xs:12,sm:6},children:e.jsx(t,{label:"Personnummer"})}),e.jsx(i,{size:{xs:12,sm:6},children:e.jsx(l,{label:"Kön",description:"Kan lämnas tomt",placeholder:"Välj kön",selectionMode:"single",items:m.map(n=>({name:n,id:n})),children:n=>e.jsx(p,{...n,children:n.name})})}),e.jsx(i,{size:{xs:12,sm:6},children:e.jsx(t,{label:"Ärendekod"})}),e.jsx(i,{size:"auto",children:e.jsx(a,{children:"Sök"})}),e.jsx(i,{size:"auto",children:e.jsx(a,{variant:"secondary",children:"Rensa"})})]})})}};o.parameters={...o.parameters,docs:{...o.parameters?.docs,source:{originalSource:`{
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
