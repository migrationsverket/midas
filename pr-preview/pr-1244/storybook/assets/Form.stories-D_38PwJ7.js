import{j as e}from"./iframe-UnOrZDCo.js";import{c}from"./Form-Bt6GvUIb.js";import{G as d}from"./Grid-BIu-voP0.js";import{G as i}from"./GridItem-D78TdR02.js";import{a as x,R as u}from"./Radio-B5v13Kcx.js";import{C as I}from"./CheckboxGroup-ByprIYhf.js";import{C as G}from"./Checkbox-Biv20TKi.js";import{T as t}from"./TextField-CvePE-bb.js";import{S as l}from"./Select-DQg9rv_u.js";import{L as p}from"./ListBoxItem-D71oMpON.js";import{B as a}from"./Button-DZKUgycP.js";import"./preload-helper-PPVm8Dsz.js";import"./useFocusRing-Bp9IxzZX.js";import"./utils-DKy0aGzr.js";import"./clsx-B-dksMZM.js";import"./index-Bfrs3YKb.js";import"./index-DPXy1hV4.js";import"./clsx-Ciqy0D92.js";import"./Group-BljE0MsX.js";import"./FieldError-BTGqp3OT.js";import"./Text-C6YEGwEA.js";import"./Text-BkvdwtUJ.js";import"./Button-Bxrzo9c5.js";import"./Hidden-BgWTJ4vd.js";import"./useLabel-De-33T0c.js";import"./useLabels-1WZ6CxHa.js";import"./useButton-BWTGB_Cp.js";import"./SelectionIndicator-C80ridiA.js";import"./useField-DLZ_5onF.js";import"./VisuallyHidden-ulNGrwFD.js";import"./useControlledState-DgxohqQv.js";import"./Label-B7nVNLra.js";import"./Dialog-hjM60LSU.js";import"./RSPContexts-B4tPHjXP.js";import"./OverlayArrow-BwUJmOnI.js";import"./useResizeObserver-fkAFhLGT.js";import"./Collection-C06BWKHu.js";import"./index-B8SNsTzv.js";import"./Separator-BIkibrNm.js";import"./SelectionManager-CIl23jZ2.js";import"./useEvent-C-gMyQkY.js";import"./scrollIntoView-D4-k8RNQ.js";import"./useDescription-CDMg63Ol.js";import"./ListKeyboardDelegate-DAEtZx3l.js";import"./PressResponder-BIw4ZyBo.js";import"./useLocalizedStringFormatter-lLy4v2xp.js";import"./LocalizedStringFormatter-wnoc2RuQ.js";import"./animation-CyhtBLH4.js";import"./getScrollParent-BhH05UgX.js";import"./ModalOverlay-ZdX6FHUK.js";import"./x-DWogN0h0.js";import"./createLucideIcon-A1bnhQ0L.js";import"./useLocalizedStringFormatter-KbPyvbsO.js";import"./Heading-ewwk1_qY.js";import"./info-ZnAeMvZK.js";import"./Popover-B7e61P6B.js";import"./check-9B5EUmdW.js";import"./useToggleState-CmTiOG-P.js";import"./TextFieldBase-mO3P5DuQ.js";import"./Input-Cs81vcsg.js";import"./useTextField-ByLEKpTJ.js";import"./TextField.module-DdivwlC8.js";import"./intlStrings-ZMTSFH_M.js";import"./ListBox-BcNCZbz9.js";import"./DragAndDrop-yw8rYTe4.js";import"./inertValue-BVWDgwue.js";import"./useListState-BJxejrq3.js";import"./TagGroup-DbRTfh5t.js";import"./useHighlightSelectionDescription-B4znxwxD.js";import"./useUpdateEffect-De277vo8.js";import"./useHasTabbableChild-Csu65WAl.js";import"./chevron-down-CnIINsmB.js";import"./Virtualizer-25Z4RNAC.js";import"./Button.module-BB7N-cLd.js";const Le={component:c,title:"Examples/Form",tags:["autodocs"],argTypes:{}},o={args:{},render:()=>{const m=["Banan","Apple","Mango"];return e.jsxs(d,{children:[e.jsx(i,{size:12,children:e.jsx(t,{label:"Ange ditt fullständiga namn",description:"Glöm inte dina eventuella mellannamn!"})}),e.jsx(i,{size:12,children:e.jsx(t,{label:"Personnummmer",description:"Anges på formen ÅÅMMDD-XXXX"})}),e.jsx(i,{size:12,children:e.jsx(l,{label:"Vilken är din favoritfrukt",placeholder:"Välj en frukt",selectionMode:"single",items:m.map(r=>({id:r,name:r})),children:r=>e.jsx(p,{...r,children:r.name})})}),e.jsx(i,{children:e.jsx(a,{children:"Skicka"})})]})}},s={args:{},render:()=>{const m=["A","B","C"],r=["Anledning A","Anledning B","Anledning C"];return e.jsx("div",{children:e.jsxs(d,{children:[e.jsx(i,{size:{xs:12,sm:6},children:e.jsx(x,{label:"Anledning",description:"Ange anledning till att du söker i databasen",children:r.map(n=>e.jsx(u,{value:n,children:n},n))})}),e.jsx(i,{size:{xs:12,sm:6},children:e.jsx(I,{label:"Databas",description:"Välj databas att söka i",children:m.map(n=>e.jsx(G,{value:n,children:n},n))})}),e.jsx(i,{size:{xs:12,sm:6},children:e.jsx(t,{label:"Namn",description:""})}),e.jsx(i,{size:{xs:12,sm:6},children:e.jsx(t,{label:"Personnummer"})}),e.jsx(i,{size:{xs:12,sm:6},children:e.jsx(l,{label:"Kön",description:"Kan lämnas tomt",placeholder:"Välj kön",selectionMode:"single",items:m.map(n=>({name:n,id:n})),children:n=>e.jsx(p,{...n,children:n.name})})}),e.jsx(i,{size:{xs:12,sm:6},children:e.jsx(t,{label:"Ärendekod"})}),e.jsx(i,{size:"auto",children:e.jsx(a,{children:"Sök"})}),e.jsx(i,{size:"auto",children:e.jsx(a,{variant:"secondary",children:"Rensa"})})]})})}};o.parameters={...o.parameters,docs:{...o.parameters?.docs,source:{originalSource:`{
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
