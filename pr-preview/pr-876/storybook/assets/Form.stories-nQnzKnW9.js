import{j as e}from"./iframe-CARYWlMr.js";import{c}from"./Form-MW-kx8SJ.js";import{G as d}from"./Grid-BRVcUk5a.js";import{G as i}from"./GridItem-CI3CxA-g.js";import{a as x,R as u}from"./Radio-DSTQXnxc.js";import{C as I}from"./CheckboxGroup-SMULMVFH.js";import{C as G}from"./Checkbox-CXTQFZGv.js";import{T as t}from"./TextField-DBBlkX8z.js";import{S as l}from"./Select-lPcG09f2.js";import{L as p}from"./ListBoxItem-CCbvUfyZ.js";import{B as a}from"./Button-CJO8gD-9.js";import"./preload-helper-PPVm8Dsz.js";import"./useFocusRing-eR43gCGN.js";import"./utils-CpzDmsYi.js";import"./clsx-B-dksMZM.js";import"./index-D4HHjk07.js";import"./index-DCEAqPJW.js";import"./clsx-Ciqy0D92.js";import"./Group-D4_10SET.js";import"./FieldError-D96zTf6J.js";import"./Text-CYKeiFr8.js";import"./Text-C6YZuIwj.js";import"./Button-Czff7WUO.js";import"./Hidden-eR-QFzh5.js";import"./useLabel-BqT-6tGp.js";import"./useLabels-D9vbRTn9.js";import"./useButton-pxShH704.js";import"./SelectionIndicator-yiNruNt6.js";import"./useField-DA0e3gVp.js";import"./VisuallyHidden-BdHdXLzS.js";import"./useControlledState-PiJ1bWKV.js";import"./Label-CVgymkT7.js";import"./Dialog-BYI3YHJ7.js";import"./RSPContexts-DmmT8ORw.js";import"./OverlayArrow-BRXBK-bP.js";import"./useResizeObserver-pH4E-9SM.js";import"./Collection-B-bw2hee.js";import"./index-Bf80HzPL.js";import"./Separator-B0PDkthk.js";import"./SelectionManager-swas-xle.js";import"./useEvent-CdMdGV8r.js";import"./scrollIntoView-BlJ4PC4n.js";import"./useDescription-1em3p3rE.js";import"./ListKeyboardDelegate-BXuWIdHq.js";import"./PressResponder-B7_gKcmh.js";import"./useLocalizedStringFormatter-BapB3aBW.js";import"./LocalizedStringFormatter-wnoc2RuQ.js";import"./animation-Ca9PT5uM.js";import"./getScrollParent-B2bQFjre.js";import"./ModalOverlay-Beb4gk3H.js";import"./x-D6m6mvyo.js";import"./createLucideIcon-DMrxxS3N.js";import"./useLocalizedStringFormatter-iKS83_lA.js";import"./Heading-CdaYlD6X.js";import"./info-BDdSR_3i.js";import"./Popover-CCRPuZRL.js";import"./check-CESeAlGN.js";import"./useToggleState-I2VmkKZ0.js";import"./TextFieldBase-C8RelZc2.js";import"./Input-B_h6sSj8.js";import"./useTextField-c7e20TCM.js";import"./TextField.module-DdivwlC8.js";import"./intlStrings-ZMTSFH_M.js";import"./ListBox-D1FdSFpi.js";import"./DragAndDrop-CTYNPxhr.js";import"./inertValue-DX6Q-5fI.js";import"./useListState-1R80qria.js";import"./TagGroup-DGL7aQ1Q.js";import"./useHighlightSelectionDescription-DD-ZWijv.js";import"./useUpdateEffect-C0xfKOay.js";import"./useHasTabbableChild-CChl7vkG.js";import"./chevron-down-D00ywtLr.js";import"./Virtualizer-CYvkcDEn.js";import"./Button.module-BB7N-cLd.js";const Le={component:c,title:"Examples/Form",tags:["autodocs"],argTypes:{}},o={args:{},render:()=>{const m=["Banan","Apple","Mango"];return e.jsxs(d,{children:[e.jsx(i,{size:12,children:e.jsx(t,{label:"Ange ditt fullständiga namn",description:"Glöm inte dina eventuella mellannamn!"})}),e.jsx(i,{size:12,children:e.jsx(t,{label:"Personnummmer",description:"Anges på formen ÅÅMMDD-XXXX"})}),e.jsx(i,{size:12,children:e.jsx(l,{label:"Vilken är din favoritfrukt",placeholder:"Välj en frukt",selectionMode:"single",items:m.map(r=>({id:r,name:r})),children:r=>e.jsx(p,{...r,children:r.name})})}),e.jsx(i,{children:e.jsx(a,{children:"Skicka"})})]})}},s={args:{},render:()=>{const m=["A","B","C"],r=["Anledning A","Anledning B","Anledning C"];return e.jsx("div",{children:e.jsxs(d,{children:[e.jsx(i,{size:{xs:12,sm:6},children:e.jsx(x,{label:"Anledning",description:"Ange anledning till att du söker i databasen",children:r.map(n=>e.jsx(u,{value:n,children:n},n))})}),e.jsx(i,{size:{xs:12,sm:6},children:e.jsx(I,{label:"Databas",description:"Välj databas att söka i",children:m.map(n=>e.jsx(G,{value:n,children:n},n))})}),e.jsx(i,{size:{xs:12,sm:6},children:e.jsx(t,{label:"Namn",description:""})}),e.jsx(i,{size:{xs:12,sm:6},children:e.jsx(t,{label:"Personnummer"})}),e.jsx(i,{size:{xs:12,sm:6},children:e.jsx(l,{label:"Kön",description:"Kan lämnas tomt",placeholder:"Välj kön",selectionMode:"single",items:m.map(n=>({name:n,id:n})),children:n=>e.jsx(p,{...n,children:n.name})})}),e.jsx(i,{size:{xs:12,sm:6},children:e.jsx(t,{label:"Ärendekod"})}),e.jsx(i,{size:"auto",children:e.jsx(a,{children:"Sök"})}),e.jsx(i,{size:"auto",children:e.jsx(a,{variant:"secondary",children:"Rensa"})})]})})}};o.parameters={...o.parameters,docs:{...o.parameters?.docs,source:{originalSource:`{
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
