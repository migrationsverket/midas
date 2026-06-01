import{j as e}from"./iframe-Dnz7kUlg.js";import{c}from"./Form-W54koQxt.js";import{G as d}from"./Grid-CNy23Pvr.js";import{G as i}from"./GridItem-BzJaHlUE.js";import{a as x,R as u}from"./Radio-Dd-7lV0x.js";import{C as I}from"./CheckboxGroup-vhzsEFp3.js";import{C as G}from"./Checkbox-Cdayt3bw.js";import{T as t}from"./TextField-CyM8sXe8.js";import{S as l}from"./Select-CkOA-vZk.js";import{L as p}from"./ListBoxItem-DjAgCzMw.js";import{B as a}from"./Button-DP2JC875.js";import"./preload-helper-PPVm8Dsz.js";import"./useFocusRing-Dzszu2Vy.js";import"./utils-CAf_-pht.js";import"./clsx-B-dksMZM.js";import"./index-PhUC-dOo.js";import"./index-7KV9d02y.js";import"./clsx-Ciqy0D92.js";import"./Group-DG0Y1mio.js";import"./FieldError-BH1ucUfl.js";import"./Text-B5WBJ4QI.js";import"./Text-CtOjX911.js";import"./Button-C6iHgC9P.js";import"./Hidden-kcU4Hzb8.js";import"./useLabel-BUdrG9lA.js";import"./useLabels-YSILxijJ.js";import"./useButton-C3WMTaS3.js";import"./SelectionIndicator-Cf1Yj1qg.js";import"./useField-DK5iQm1y.js";import"./VisuallyHidden-Dm7meOkg.js";import"./useControlledState-Iqz0lmAp.js";import"./Label-B0VPHTag.js";import"./Dialog--3X15ZgF.js";import"./RSPContexts-Cp-T_kgY.js";import"./OverlayArrow-CUG7RuY1.js";import"./useResizeObserver-DFwb3sj2.js";import"./Collection-CZKBbkK9.js";import"./index-ju8lx5jh.js";import"./Separator-JiZwya5a.js";import"./SelectionManager-CGlOn_QU.js";import"./useEvent-C9zHHyc9.js";import"./scrollIntoView-DTF-X5Bx.js";import"./useDescription-BWq2pUsi.js";import"./ListKeyboardDelegate-B5Qqhejy.js";import"./PressResponder-CgFVQ_iV.js";import"./useLocalizedStringFormatter-DwxYp_RG.js";import"./LocalizedStringFormatter-wnoc2RuQ.js";import"./animation-BpdwLEAR.js";import"./getScrollParent-CEScWKZW.js";import"./ModalOverlay-KVkngti-.js";import"./x-68yJIKBo.js";import"./createLucideIcon-C7dFuUAn.js";import"./useLocalizedStringFormatter-1LNK4MxE.js";import"./Heading-Bzl8jYcb.js";import"./info-DIFu0oxQ.js";import"./Popover-QiPoLtmK.js";import"./check-COv7Z62F.js";import"./useToggleState-d84q-EgA.js";import"./TextFieldBase-CNxoxtfr.js";import"./Input-C2nOYIfl.js";import"./useTextField-G04DdbQ9.js";import"./TextField.module-DdivwlC8.js";import"./intlStrings-ZMTSFH_M.js";import"./ListBox-CY6IeeeP.js";import"./DragAndDrop-Mj_ctjjP.js";import"./inertValue-DM6_m64U.js";import"./useListState-CVE2T8r8.js";import"./TagGroup-Dj1iNZW_.js";import"./useHighlightSelectionDescription-DlOiJhj_.js";import"./useUpdateEffect-BQu6ZFqv.js";import"./useHasTabbableChild-CYb-389S.js";import"./chevron-down-KiZWV7fF.js";import"./Virtualizer-DHgx-5_d.js";import"./Button.module-BB7N-cLd.js";const Le={component:c,title:"Examples/Form",tags:["autodocs"],argTypes:{}},o={args:{},render:()=>{const m=["Banan","Apple","Mango"];return e.jsxs(d,{children:[e.jsx(i,{size:12,children:e.jsx(t,{label:"Ange ditt fullständiga namn",description:"Glöm inte dina eventuella mellannamn!"})}),e.jsx(i,{size:12,children:e.jsx(t,{label:"Personnummmer",description:"Anges på formen ÅÅMMDD-XXXX"})}),e.jsx(i,{size:12,children:e.jsx(l,{label:"Vilken är din favoritfrukt",placeholder:"Välj en frukt",selectionMode:"single",items:m.map(r=>({id:r,name:r})),children:r=>e.jsx(p,{...r,children:r.name})})}),e.jsx(i,{children:e.jsx(a,{children:"Skicka"})})]})}},s={args:{},render:()=>{const m=["A","B","C"],r=["Anledning A","Anledning B","Anledning C"];return e.jsx("div",{children:e.jsxs(d,{children:[e.jsx(i,{size:{xs:12,sm:6},children:e.jsx(x,{label:"Anledning",description:"Ange anledning till att du söker i databasen",children:r.map(n=>e.jsx(u,{value:n,children:n},n))})}),e.jsx(i,{size:{xs:12,sm:6},children:e.jsx(I,{label:"Databas",description:"Välj databas att söka i",children:m.map(n=>e.jsx(G,{value:n,children:n},n))})}),e.jsx(i,{size:{xs:12,sm:6},children:e.jsx(t,{label:"Namn",description:""})}),e.jsx(i,{size:{xs:12,sm:6},children:e.jsx(t,{label:"Personnummer"})}),e.jsx(i,{size:{xs:12,sm:6},children:e.jsx(l,{label:"Kön",description:"Kan lämnas tomt",placeholder:"Välj kön",selectionMode:"single",items:m.map(n=>({name:n,id:n})),children:n=>e.jsx(p,{...n,children:n.name})})}),e.jsx(i,{size:{xs:12,sm:6},children:e.jsx(t,{label:"Ärendekod"})}),e.jsx(i,{size:"auto",children:e.jsx(a,{children:"Sök"})}),e.jsx(i,{size:"auto",children:e.jsx(a,{variant:"secondary",children:"Rensa"})})]})})}};o.parameters={...o.parameters,docs:{...o.parameters?.docs,source:{originalSource:`{
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
