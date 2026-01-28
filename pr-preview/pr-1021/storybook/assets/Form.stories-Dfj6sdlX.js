import{j as e}from"./iframe-BUyS91gW.js";import{$ as c}from"./Form-CRbbeAt1.js";import{G as d}from"./Grid-CB8n2vRE.js";import{G as i}from"./GridItem-Dxeme0wi.js";import{T as t}from"./TextField-C3qe9L52.js";import{S as l}from"./Select-CqE-0lRp.js";import{B as a}from"./Button-Fgf1rOG6.js";import{R as x,a as u}from"./Radio-D88xNs9c.js";import{C as I}from"./CheckboxGroup-rd4T549M.js";import{C as G}from"./Checkbox-BTPM0ImD.js";import{L as p}from"./ListBoxItem-C7fPGIhs.js";import"./preload-helper-PPVm8Dsz.js";import"./utils-DtC5DJlv.js";import"./clsx-B-dksMZM.js";import"./useFormValidation-C60WEHmq.js";import"./useFocusRing-BaIAxEeU.js";import"./index-fSOK1slO.js";import"./index-BdrDW8xm.js";import"./clsx-Ciqy0D92.js";import"./TextFieldBase-Bz71TA_Z.js";import"./TextField-Bl349ZRR.js";import"./FieldError-CFfhbF8H.js";import"./Text-BPqpCryx.js";import"./Text-COkIx5pS.js";import"./RSPContexts--MjZDMmy.js";import"./Group-Bz0QF0Oo.js";import"./Input-THlk9SG0.js";import"./Hidden-DgRACCJZ.js";import"./Button-BFrQimfv.js";import"./useLabels-Tbmfxorq.js";import"./useButton-CnjpyvMJ.js";import"./useTextField-BfyVSh_-.js";import"./useControlledState-pY5KefEA.js";import"./useField-DOrPhly4.js";import"./TextField.module-1fNSVGjT.js";import"./Label-C6A868Z3.js";import"./Dialog-Z0MjxCmS.js";import"./OverlayArrow-Y6hr8waV.js";import"./useResizeObserver-t9_jvW0e.js";import"./Collection-Dh_MMJJ4.js";import"./index-C4j6v36i.js";import"./Separator-Czy8J2sA.js";import"./SelectionManager-BcWkh7qF.js";import"./useEvent-Cv6pNzgP.js";import"./scrollIntoView-CtWAMHuk.js";import"./SelectionIndicator-CxkyDs28.js";import"./useDescription-BGG01yMW.js";import"./ListKeyboardDelegate-CP2zV0zS.js";import"./PressResponder-CZlPqYD0.js";import"./useLocalizedStringFormatter-DVHPDbxU.js";import"./LocalizedStringFormatter-wnoc2RuQ.js";import"./animation-COGeTY64.js";import"./getScrollParent-Cpn7MDkE.js";import"./VisuallyHidden-DWShOfIn.js";import"./x-DZYUY6bl.js";import"./createLucideIcon-B-WbV5NM.js";import"./useLocalizedStringFormatter-p_nb56wi.js";import"./Heading-BY0o0N8u.js";import"./info-DXkoRLXy.js";import"./Popover-0CHRPJuo.js";import"./intlStrings-ZMTSFH_M.js";import"./ListBox-CK8tbRV4.js";import"./DragAndDrop-CSPev3rX.js";import"./inertValue-w8dJoYKL.js";import"./useListState-C2SgQSeg.js";import"./Tag-BW-i-Vga.js";import"./useHighlightSelectionDescription-BP-IL1Lt.js";import"./useUpdateEffect-DgSe21kE.js";import"./useHasTabbableChild-q5q2yXuu.js";import"./chevron-down-uRt8jQCi.js";import"./Button.module-Co5e5YHp.js";import"./check-BAipwjYf.js";import"./useToggleState-DlVTDabw.js";import"./Virtualizer-n7RK2eX5.js";const Le={component:c,title:"Examples/Form",tags:["autodocs"],argTypes:{}},o={args:{},render:()=>{const m=["Banan","Apple","Mango"];return e.jsxs(d,{children:[e.jsx(i,{size:12,children:e.jsx(t,{label:"Ange ditt fullständiga namn",description:"Glöm inte dina eventuella mellannamn!"})}),e.jsx(i,{size:12,children:e.jsx(t,{label:"Personnummmer",description:"Anges på formen ÅÅMMDD-XXXX"})}),e.jsx(i,{size:12,children:e.jsx(l,{label:"Vilken är din favoritfrukt",placeholder:"Välj en frukt",selectionMode:"single",items:m.map(r=>({id:r,name:r})),children:r=>e.jsx(p,{...r,children:r.name})})}),e.jsx(i,{children:e.jsx(a,{children:"Skicka"})})]})}},s={args:{},render:()=>{const m=["A","B","C"],r=["Anledning A","Anledning B","Anledning C"];return e.jsx("div",{children:e.jsxs(d,{children:[e.jsx(i,{size:{xs:12,sm:6},children:e.jsx(x,{label:"Anledning",description:"Ange anledning till att du söker i databasen",children:r.map(n=>e.jsx(u,{value:n,children:n},n))})}),e.jsx(i,{size:{xs:12,sm:6},children:e.jsx(I,{label:"Databas",description:"Välj databas att söka i",children:m.map(n=>e.jsx(G,{value:n,children:n},n))})}),e.jsx(i,{size:{xs:12,sm:6},children:e.jsx(t,{label:"Namn",description:""})}),e.jsx(i,{size:{xs:12,sm:6},children:e.jsx(t,{label:"Personnummer"})}),e.jsx(i,{size:{xs:12,sm:6},children:e.jsx(l,{label:"Kön",description:"Kan lämnas tomt",placeholder:"Välj kön",selectionMode:"single",items:m.map(n=>({name:n,id:n})),children:n=>e.jsx(p,{...n,children:n.name})})}),e.jsx(i,{size:{xs:12,sm:6},children:e.jsx(t,{label:"Ärendekod"})}),e.jsx(i,{size:"auto",children:e.jsx(a,{children:"Sök"})}),e.jsx(i,{size:"auto",children:e.jsx(a,{variant:"secondary",children:"Rensa"})})]})})}};o.parameters={...o.parameters,docs:{...o.parameters?.docs,source:{originalSource:`{
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
