import{j as e}from"./iframe-CPZ4_d2q.js";import{c}from"./Form-D49Ri7OX.js";import{G as d}from"./Grid-CQcXzr9E.js";import{G as i}from"./GridItem-msaItLiu.js";import{a as x,R as u}from"./Radio-vLV856JK.js";import{C as I}from"./CheckboxGroup-CVFFKc6j.js";import{C as G}from"./Checkbox-3NqGxmjj.js";import{T as t}from"./TextField-DdJyI55A.js";import{S as l}from"./Select-D7zf1_v3.js";import{L as p}from"./ListBoxItem-pVcwVyES.js";import{B as a}from"./Button-hn_7_4-p.js";import"./preload-helper-PPVm8Dsz.js";import"./useFocusRing-d1kY_X2y.js";import"./utils-DWW_dCIy.js";import"./clsx-B-dksMZM.js";import"./index-BFKhD2nT.js";import"./index-DgF8N3uU.js";import"./clsx-Ciqy0D92.js";import"./Group-Abbeg9Sy.js";import"./FieldError-rOuvG30X.js";import"./Text-C-nhapA_.js";import"./Text-CxhoFnBV.js";import"./Button-CXhapsAk.js";import"./Hidden-ddHOLGj0.js";import"./useLabel-D74j4qSK.js";import"./useLabels-DBtqpm2S.js";import"./useButton-BXpF8VVF.js";import"./SelectionIndicator-Chd1drg3.js";import"./useField-DjwAKZ9N.js";import"./VisuallyHidden-D_2Qiydl.js";import"./useControlledState-DiN_YqvG.js";import"./Label-D2m2QNEU.js";import"./Dialog-DdHx8S2w.js";import"./RSPContexts-CNU_cvLJ.js";import"./OverlayArrow-DPVhU9-q.js";import"./useResizeObserver-CEyuuEs6.js";import"./Collection-Fsz5o6xJ.js";import"./index-DBpEcHx7.js";import"./Separator-Bsl6T3fj.js";import"./SelectionManager-Tb8iyxQ5.js";import"./useEvent-Bz5nfpns.js";import"./scrollIntoView-DakIikjX.js";import"./useDescription-DY6oOuRz.js";import"./ListKeyboardDelegate-BtHFCYxu.js";import"./PressResponder-DRQhv0a8.js";import"./useLocalizedStringFormatter-DLx3xcdn.js";import"./LocalizedStringFormatter-wnoc2RuQ.js";import"./animation-RJHByoGu.js";import"./getScrollParent-B7yWW-nR.js";import"./x-_8u0d44F.js";import"./createLucideIcon-CHHQY25e.js";import"./useLocalizedStringFormatter-7dRGsYY4.js";import"./Heading-CCkMK4RX.js";import"./info-CvqlYfZm.js";import"./Popover-DfB-JRIR.js";import"./check-Dx2V9mk7.js";import"./useToggleState-BgzLiZaz.js";import"./TextFieldBase-C85sQ4dx.js";import"./Input-Du1VWq2r.js";import"./useTextField-DPTUmy2B.js";import"./TextField.module-DdivwlC8.js";import"./intlStrings-ZMTSFH_M.js";import"./ListBox-BH3g24BA.js";import"./DragAndDrop-Dlh9qUf-.js";import"./inertValue-B0pm__uB.js";import"./useListState-CJwOTcql.js";import"./TagGroup-DYqX-iBp.js";import"./useHighlightSelectionDescription-io7gTwAQ.js";import"./useUpdateEffect-BrNCpMnQ.js";import"./useHasTabbableChild-jJKWv_0t.js";import"./chevron-down-BIvv1XPm.js";import"./Virtualizer-G0rSPCUA.js";import"./Button.module-BB7N-cLd.js";const Xe={component:c,title:"Examples/Form",tags:["autodocs"],argTypes:{}},o={args:{},render:()=>{const m=["Banan","Apple","Mango"];return e.jsxs(d,{children:[e.jsx(i,{size:12,children:e.jsx(t,{label:"Ange ditt fullständiga namn",description:"Glöm inte dina eventuella mellannamn!"})}),e.jsx(i,{size:12,children:e.jsx(t,{label:"Personnummmer",description:"Anges på formen ÅÅMMDD-XXXX"})}),e.jsx(i,{size:12,children:e.jsx(l,{label:"Vilken är din favoritfrukt",placeholder:"Välj en frukt",selectionMode:"single",items:m.map(r=>({id:r,name:r})),children:r=>e.jsx(p,{...r,children:r.name})})}),e.jsx(i,{children:e.jsx(a,{children:"Skicka"})})]})}},s={args:{},render:()=>{const m=["A","B","C"],r=["Anledning A","Anledning B","Anledning C"];return e.jsx("div",{children:e.jsxs(d,{children:[e.jsx(i,{size:{xs:12,sm:6},children:e.jsx(x,{label:"Anledning",description:"Ange anledning till att du söker i databasen",children:r.map(n=>e.jsx(u,{value:n,children:n},n))})}),e.jsx(i,{size:{xs:12,sm:6},children:e.jsx(I,{label:"Databas",description:"Välj databas att söka i",children:m.map(n=>e.jsx(G,{value:n,children:n},n))})}),e.jsx(i,{size:{xs:12,sm:6},children:e.jsx(t,{label:"Namn",description:""})}),e.jsx(i,{size:{xs:12,sm:6},children:e.jsx(t,{label:"Personnummer"})}),e.jsx(i,{size:{xs:12,sm:6},children:e.jsx(l,{label:"Kön",description:"Kan lämnas tomt",placeholder:"Välj kön",selectionMode:"single",items:m.map(n=>({name:n,id:n})),children:n=>e.jsx(p,{...n,children:n.name})})}),e.jsx(i,{size:{xs:12,sm:6},children:e.jsx(t,{label:"Ärendekod"})}),e.jsx(i,{size:"auto",children:e.jsx(a,{children:"Sök"})}),e.jsx(i,{size:"auto",children:e.jsx(a,{variant:"secondary",children:"Rensa"})})]})})}};o.parameters={...o.parameters,docs:{...o.parameters?.docs,source:{originalSource:`{
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
