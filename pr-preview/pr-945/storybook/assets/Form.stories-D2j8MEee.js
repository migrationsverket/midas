import{j as e}from"./iframe-qwwZM-tE.js";import{$ as c}from"./Form-34dXS4qq.js";import{G as d}from"./Grid-CnLpVK_-.js";import{G as i}from"./GridItem-BRRTReZk.js";import{T as t}from"./TextField-BuiS97eA.js";import{S as l}from"./Select-B0IclSI6.js";import{B as a}from"./Button-D_l512WF.js";import{R as x,a as u}from"./Radio-DdPKcGXX.js";import{C as I}from"./CheckboxGroup-B8Qy_D7w.js";import{C as G}from"./Checkbox-CjCTtCHT.js";import{L as p}from"./ListBoxItem-C-7ApHAM.js";import"./preload-helper-PPVm8Dsz.js";import"./utils-CE0AWIm4.js";import"./clsx-B-dksMZM.js";import"./useFormValidation-Z7RuVEfw.js";import"./useFocusRing-DVEbG0UH.js";import"./index-CUgyb0mk.js";import"./index-B0QkTLut.js";import"./clsx-Ciqy0D92.js";import"./TextFieldBase-DILqSKDe.js";import"./TextField-BJ-Xt48z.js";import"./FieldError-C6s0Sgvs.js";import"./Text-CjDFFRcJ.js";import"./Text-C5yJLujA.js";import"./RSPContexts-DxRUGpXJ.js";import"./Group-D_AGNQqa.js";import"./Input-C6UR8_B7.js";import"./Hidden-nIEH3jLZ.js";import"./Button-LMtqtR6P.js";import"./useLabels-ygVPKbju.js";import"./useButton-BG0hBHNu.js";import"./useTextField-BSqkbYPh.js";import"./useControlledState-B1hjZKLN.js";import"./useField-CrXgM-h6.js";import"./TextField.module-1-_3qsJZ.js";import"./Label-CnT1N-ZH.js";import"./Dialog-Cwr08cpl.js";import"./OverlayArrow-DQ541iri.js";import"./useResizeObserver-Ksii_YAo.js";import"./Collection-BsSMrTsh.js";import"./index-gjAEOKfl.js";import"./Separator-Ch2diD89.js";import"./SelectionManager-D0h4RoSA.js";import"./useEvent-BKT-lAgU.js";import"./scrollIntoView-D6_LqhvJ.js";import"./SelectionIndicator-fFcChirv.js";import"./useDescription-txzcDlxe.js";import"./ListKeyboardDelegate-ZTI_j1GM.js";import"./PressResponder-DS5LOVuL.js";import"./useLocalizedStringFormatter-C0HEB4Rj.js";import"./LocalizedStringFormatter-wnoc2RuQ.js";import"./getScrollParent-vP69cu3n.js";import"./VisuallyHidden-DuWmqszT.js";import"./x-dLBUgrRX.js";import"./createLucideIcon-DdrXPP-v.js";import"./useLocalizedStringFormatter-BG4Ct8V8.js";import"./Heading-DtQJHb5j.js";import"./info-DSfQR85G.js";import"./Popover-R1R2hb2u.js";import"./intlStrings-ZMTSFH_M.js";import"./ListBox-B9-GNckJ.js";import"./DragAndDrop-BC4vtBjr.js";import"./inertValue-DhN2kr1X.js";import"./useListState-B7TkFivF.js";import"./Tag-tofnnHty.js";import"./useHighlightSelectionDescription-NNuP5Oxo.js";import"./useUpdateEffect-C27Mo3WX.js";import"./useHasTabbableChild-BQnRxZZy.js";import"./chevron-down-BKL_bMEe.js";import"./Button.module-CtQ1deO8.js";import"./check-CFwkP_Cm.js";import"./useToggleState-BZAYERNx.js";import"./Virtualizer-CpdPqzvJ.js";const Xe={component:c,title:"Examples/Form",tags:["autodocs"],argTypes:{}},o={args:{},render:()=>{const m=["Banan","Apple","Mango"];return e.jsxs(d,{children:[e.jsx(i,{size:12,children:e.jsx(t,{label:"Ange ditt fullständiga namn",description:"Glöm inte dina eventuella mellannamn!"})}),e.jsx(i,{size:12,children:e.jsx(t,{label:"Personnummmer",description:"Anges på formen ÅÅMMDD-XXXX"})}),e.jsx(i,{size:12,children:e.jsx(l,{label:"Vilken är din favoritfrukt",placeholder:"Välj en frukt",selectionMode:"single",items:m.map(r=>({id:r,name:r})),children:r=>e.jsx(p,{...r,children:r.name})})}),e.jsx(i,{children:e.jsx(a,{children:"Skicka"})})]})}},s={args:{},render:()=>{const m=["A","B","C"],r=["Anledning A","Anledning B","Anledning C"];return e.jsx("div",{children:e.jsxs(d,{children:[e.jsx(i,{size:{xs:12,sm:6},children:e.jsx(x,{label:"Anledning",description:"Ange anledning till att du söker i databasen",children:r.map(n=>e.jsx(u,{value:n,children:n},n))})}),e.jsx(i,{size:{xs:12,sm:6},children:e.jsx(I,{label:"Databas",description:"Välj databas att söka i",children:m.map(n=>e.jsx(G,{value:n,children:n},n))})}),e.jsx(i,{size:{xs:12,sm:6},children:e.jsx(t,{label:"Namn",description:""})}),e.jsx(i,{size:{xs:12,sm:6},children:e.jsx(t,{label:"Personnummer"})}),e.jsx(i,{size:{xs:12,sm:6},children:e.jsx(l,{label:"Kön",description:"Kan lämnas tomt",placeholder:"Välj kön",selectionMode:"single",items:m.map(n=>({name:n,id:n})),children:n=>e.jsx(p,{...n,children:n.name})})}),e.jsx(i,{size:{xs:12,sm:6},children:e.jsx(t,{label:"Ärendekod"})}),e.jsx(i,{size:"auto",children:e.jsx(a,{children:"Sök"})}),e.jsx(i,{size:"auto",children:e.jsx(a,{variant:"secondary",children:"Rensa"})})]})})}};o.parameters={...o.parameters,docs:{...o.parameters?.docs,source:{originalSource:`{
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
