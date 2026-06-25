import{j as e}from"./iframe-Cc2x2NhL.js";import{c}from"./Form-Dzl391B-.js";import{G as d}from"./Grid-CQgUZRfr.js";import{G as i}from"./GridItem-BGnyy5kI.js";import{a as x,R as u}from"./Radio-Dm-lClL7.js";import{C as I}from"./CheckboxGroup-BfGgLGjX.js";import{C as G}from"./Checkbox-q8bzzOFZ.js";import{T as t}from"./TextField-CPG23-8Y.js";import{S as l}from"./Select-By1WY59d.js";import{L as p}from"./ListBoxItem-D2Ip_XrN.js";import{B as a}from"./Button-ClCBSbVd.js";import"./preload-helper-PPVm8Dsz.js";import"./useFocusRing-WAjZqxaV.js";import"./utils-4Igqbjf8.js";import"./clsx-B-dksMZM.js";import"./index-B2z8J_iy.js";import"./index-BMFqcPHU.js";import"./clsx-Ciqy0D92.js";import"./Group-XJNTrNJv.js";import"./FieldError-l6QnCvwQ.js";import"./Text-D3p3B56u.js";import"./Text-DcE_bHZ_.js";import"./Button-ByJMIeTP.js";import"./Hidden-DXurTabA.js";import"./useLabel-C3c6HGiK.js";import"./useLabels-DlHfLFqT.js";import"./useButton-DbeNFfwU.js";import"./SelectionIndicator-BhAuP5hr.js";import"./useField-Dyc8N4z1.js";import"./VisuallyHidden-CAnoPPmf.js";import"./useControlledState-B_OZWkkq.js";import"./Label-DYNh7RDv.js";import"./Dialog-BPf3IZOs.js";import"./RSPContexts-0YfvD9LK.js";import"./OverlayArrow-FlYvI0_Z.js";import"./useResizeObserver-DWx8oCEL.js";import"./Collection-DrMZK_17.js";import"./index-DXdtOShX.js";import"./Separator-7WC-UZS3.js";import"./SelectionManager-DEIbJdB3.js";import"./useEvent-BBH3oYjA.js";import"./scrollIntoView-BdS7fMnb.js";import"./useDescription-Djm_rT5S.js";import"./ListKeyboardDelegate-BFNmsEvi.js";import"./PressResponder-C8VUQxtG.js";import"./useLocalizedStringFormatter-DvNtIm_P.js";import"./LocalizedStringFormatter-wnoc2RuQ.js";import"./animation-Dll6ZQaD.js";import"./getScrollParent-D5jUw6gC.js";import"./ModalOverlay-BmUXt-jD.js";import"./x-BwuT2ktD.js";import"./createLucideIcon-DcmAEzc9.js";import"./useLocalizedStringFormatter-sXp9RPex.js";import"./Heading-Bd4wMQv_.js";import"./info-dC2Dc-R-.js";import"./Popover-BTHC1uhw.js";import"./check-C0FSLY3B.js";import"./useToggleState-Dsi2eB2f.js";import"./TextFieldBase-FK_eDj-W.js";import"./Input-DhTCACkf.js";import"./useTextField-CO__Sljx.js";import"./TextField.module-DdivwlC8.js";import"./intlStrings-ZMTSFH_M.js";import"./ListBox-NhRMPBH-.js";import"./DragAndDrop-Y6czQqvz.js";import"./inertValue-NX4mGinj.js";import"./useListState-CILrrkJT.js";import"./TagGroup-acVaiTsf.js";import"./useHighlightSelectionDescription-BC5dhNcf.js";import"./useUpdateEffect-DRFRpbP7.js";import"./useHasTabbableChild-ChPM18ed.js";import"./chevron-down-aV9AXQWP.js";import"./Virtualizer-c7BNIXTu.js";import"./Button.module-BB7N-cLd.js";const Le={component:c,title:"Examples/Form",tags:["autodocs"],argTypes:{}},o={args:{},render:()=>{const m=["Banan","Apple","Mango"];return e.jsxs(d,{children:[e.jsx(i,{size:12,children:e.jsx(t,{label:"Ange ditt fullständiga namn",description:"Glöm inte dina eventuella mellannamn!"})}),e.jsx(i,{size:12,children:e.jsx(t,{label:"Personnummmer",description:"Anges på formen ÅÅMMDD-XXXX"})}),e.jsx(i,{size:12,children:e.jsx(l,{label:"Vilken är din favoritfrukt",placeholder:"Välj en frukt",selectionMode:"single",items:m.map(r=>({id:r,name:r})),children:r=>e.jsx(p,{...r,children:r.name})})}),e.jsx(i,{children:e.jsx(a,{children:"Skicka"})})]})}},s={args:{},render:()=>{const m=["A","B","C"],r=["Anledning A","Anledning B","Anledning C"];return e.jsx("div",{children:e.jsxs(d,{children:[e.jsx(i,{size:{xs:12,sm:6},children:e.jsx(x,{label:"Anledning",description:"Ange anledning till att du söker i databasen",children:r.map(n=>e.jsx(u,{value:n,children:n},n))})}),e.jsx(i,{size:{xs:12,sm:6},children:e.jsx(I,{label:"Databas",description:"Välj databas att söka i",children:m.map(n=>e.jsx(G,{value:n,children:n},n))})}),e.jsx(i,{size:{xs:12,sm:6},children:e.jsx(t,{label:"Namn",description:""})}),e.jsx(i,{size:{xs:12,sm:6},children:e.jsx(t,{label:"Personnummer"})}),e.jsx(i,{size:{xs:12,sm:6},children:e.jsx(l,{label:"Kön",description:"Kan lämnas tomt",placeholder:"Välj kön",selectionMode:"single",items:m.map(n=>({name:n,id:n})),children:n=>e.jsx(p,{...n,children:n.name})})}),e.jsx(i,{size:{xs:12,sm:6},children:e.jsx(t,{label:"Ärendekod"})}),e.jsx(i,{size:"auto",children:e.jsx(a,{children:"Sök"})}),e.jsx(i,{size:"auto",children:e.jsx(a,{variant:"secondary",children:"Rensa"})})]})})}};o.parameters={...o.parameters,docs:{...o.parameters?.docs,source:{originalSource:`{
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
