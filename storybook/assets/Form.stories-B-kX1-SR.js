import{j as e}from"./iframe-CUSvXe23.js";import{c}from"./Form-CKmcwWsP.js";import{G as d}from"./Grid-CX1gyKmw.js";import{G as i}from"./GridItem-bVhZD9Qp.js";import{a as x,R as u}from"./Radio-N73U--Qs.js";import{C as I}from"./CheckboxGroup-22jo3xRy.js";import{C as G}from"./Checkbox-CTbW8ApC.js";import{T as t}from"./TextField-CQBgubjx.js";import{S as l}from"./Select-CYHvr5qy.js";import{L as p}from"./ListBoxItem-D__SOwXh.js";import{B as a}from"./Button-ricz7KuE.js";import"./preload-helper-PPVm8Dsz.js";import"./useFocusRing-BuJn1tRD.js";import"./utils-CkRXDuX-.js";import"./clsx-B-dksMZM.js";import"./index-BjoHnV1_.js";import"./index-CdztG2Xx.js";import"./clsx-Ciqy0D92.js";import"./Group-CLc-S5J5.js";import"./FieldError-t8sTtSNx.js";import"./Text-DLWDclOW.js";import"./Text-NxTN73uc.js";import"./Button-C1-Re332.js";import"./Hidden-Dhsax2Cn.js";import"./useLabel-ulwKDPvJ.js";import"./useLabels-BPCgaUFa.js";import"./useButton-BO5Zhbxe.js";import"./SelectionIndicator-BsHKQOI6.js";import"./useField-Bd0xb1Jz.js";import"./VisuallyHidden-YrO2RMP0.js";import"./useControlledState-BDwJH1MB.js";import"./Label-P4rLu63J.js";import"./Dialog-WiQnBmSv.js";import"./RSPContexts-BfFZIYKm.js";import"./OverlayArrow-B9pAfRtR.js";import"./useResizeObserver-YHez26s-.js";import"./Collection-DVKXIiRM.js";import"./index-BpgVI4Ey.js";import"./Separator-BI_16oCX.js";import"./SelectionManager-DsrNbEuz.js";import"./useEvent-DjixHLjK.js";import"./scrollIntoView-CjSFcs3B.js";import"./useDescription-CSzbO1wx.js";import"./ListKeyboardDelegate--p1TIPpF.js";import"./PressResponder-ZnJokgKw.js";import"./useLocalizedStringFormatter-CQWvwsyX.js";import"./LocalizedStringFormatter-wnoc2RuQ.js";import"./animation-9OdcW6fl.js";import"./getScrollParent-DO1MdHqq.js";import"./Modal-BSelldcL.js";import"./x-W7_jPxcF.js";import"./createLucideIcon-Ce9oZthD.js";import"./useLocalizedStringFormatter-DOZj6KI_.js";import"./Heading-CG9en55N.js";import"./info-CwlJQaKh.js";import"./Popover-CUncdCgl.js";import"./check-CGrmEn2X.js";import"./useToggleState-BmGzd-Ie.js";import"./TextFieldBase-B2RSAUdS.js";import"./Input-Bh5XjTjP.js";import"./useTextField-BO4SPiFd.js";import"./TextField.module-DdivwlC8.js";import"./intlStrings-ZMTSFH_M.js";import"./ListBox-CkXAw88F.js";import"./DragAndDrop-D3Byo9eJ.js";import"./inertValue-mOPl8NXi.js";import"./useListState-C03PM4G4.js";import"./TagGroup-CIVYnH1Z.js";import"./useHighlightSelectionDescription-k1hzuoIB.js";import"./useUpdateEffect-DpVMtmWZ.js";import"./useHasTabbableChild-CcC45vz7.js";import"./chevron-down-DqgfBr56.js";import"./Virtualizer-9ip3g6Vh.js";import"./Button.module-BB7N-cLd.js";const Le={component:c,title:"Examples/Form",tags:["autodocs"],argTypes:{}},o={args:{},render:()=>{const m=["Banan","Apple","Mango"];return e.jsxs(d,{children:[e.jsx(i,{size:12,children:e.jsx(t,{label:"Ange ditt fullständiga namn",description:"Glöm inte dina eventuella mellannamn!"})}),e.jsx(i,{size:12,children:e.jsx(t,{label:"Personnummmer",description:"Anges på formen ÅÅMMDD-XXXX"})}),e.jsx(i,{size:12,children:e.jsx(l,{label:"Vilken är din favoritfrukt",placeholder:"Välj en frukt",selectionMode:"single",items:m.map(r=>({id:r,name:r})),children:r=>e.jsx(p,{...r,children:r.name})})}),e.jsx(i,{children:e.jsx(a,{children:"Skicka"})})]})}},s={args:{},render:()=>{const m=["A","B","C"],r=["Anledning A","Anledning B","Anledning C"];return e.jsx("div",{children:e.jsxs(d,{children:[e.jsx(i,{size:{xs:12,sm:6},children:e.jsx(x,{label:"Anledning",description:"Ange anledning till att du söker i databasen",children:r.map(n=>e.jsx(u,{value:n,children:n},n))})}),e.jsx(i,{size:{xs:12,sm:6},children:e.jsx(I,{label:"Databas",description:"Välj databas att söka i",children:m.map(n=>e.jsx(G,{value:n,children:n},n))})}),e.jsx(i,{size:{xs:12,sm:6},children:e.jsx(t,{label:"Namn",description:""})}),e.jsx(i,{size:{xs:12,sm:6},children:e.jsx(t,{label:"Personnummer"})}),e.jsx(i,{size:{xs:12,sm:6},children:e.jsx(l,{label:"Kön",description:"Kan lämnas tomt",placeholder:"Välj kön",selectionMode:"single",items:m.map(n=>({name:n,id:n})),children:n=>e.jsx(p,{...n,children:n.name})})}),e.jsx(i,{size:{xs:12,sm:6},children:e.jsx(t,{label:"Ärendekod"})}),e.jsx(i,{size:"auto",children:e.jsx(a,{children:"Sök"})}),e.jsx(i,{size:"auto",children:e.jsx(a,{variant:"secondary",children:"Rensa"})})]})})}};o.parameters={...o.parameters,docs:{...o.parameters?.docs,source:{originalSource:`{
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
