import{j as e}from"./iframe-D2QiFl1Q.js";import{$ as c}from"./Form-xBEu3dY3.js";import{G as d}from"./Grid-XvM2qlVl.js";import{G as i}from"./GridItem-CaSTFF20.js";import{a as x,R as u}from"./Radio-DL97mjDD.js";import{C as I}from"./CheckboxGroup-DlJJ8ojX.js";import{C as G}from"./Checkbox-1nb9OyPr.js";import{T as t}from"./TextField-DY8yNRSA.js";import{S as l}from"./Select-DCTx3uQ-.js";import{L as p}from"./ListBoxItem-DYvCoX39.js";import{B as a}from"./Button-fUVp2AkT.js";import"./preload-helper-PPVm8Dsz.js";import"./utils-C8ZbQkE7.js";import"./clsx-B-dksMZM.js";import"./useFormValidation-BbQ0GoQK.js";import"./useFocusRing-CBM371L3.js";import"./index-Cl8hPLRd.js";import"./index-McmNB2RO.js";import"./clsx-Ciqy0D92.js";import"./Group-Cib9kvkp.js";import"./FieldError-DzMY0KoY.js";import"./Text-BwutiQ1I.js";import"./Text-Czz1G82J.js";import"./Button-jwqYg1go.js";import"./Hidden-Ec0HhwAs.js";import"./useLabels-By_yzmZ7.js";import"./useButton-q6SL79uh.js";import"./SelectionIndicator-CdqppYXN.js";import"./useField-CSsZ2u1C.js";import"./VisuallyHidden-LF61GAgF.js";import"./useControlledState-l7K5Cl0t.js";import"./Label-BTksugbp.js";import"./Dialog-CgGE3fg-.js";import"./RSPContexts-CrDf2hpR.js";import"./OverlayArrow-BU4YOGz4.js";import"./useResizeObserver-D4Y8n76L.js";import"./Collection-Dj5rVQCZ.js";import"./index-D8q3UKih.js";import"./Separator-CPq-byW8.js";import"./SelectionManager-4_hx7v1F.js";import"./useEvent-KlMFWHnu.js";import"./scrollIntoView-CtWAMHuk.js";import"./useDescription-BCN90KGy.js";import"./ListKeyboardDelegate-bQekQHSh.js";import"./PressResponder-BpYoU1QI.js";import"./useLocalizedStringFormatter-AJrWLMlk.js";import"./LocalizedStringFormatter-wnoc2RuQ.js";import"./animation-BoeTLxfz.js";import"./getScrollParent-Cpn7MDkE.js";import"./x-CxsNPW5G.js";import"./createLucideIcon-D1IpgdG_.js";import"./useLocalizedStringFormatter-lXxhePp3.js";import"./Heading-CVxW4iun.js";import"./info-vEMoj0J0.js";import"./Popover-cIm5tBYf.js";import"./check-D6CX_mmE.js";import"./useToggleState-BSzGDfSw.js";import"./TextFieldBase-CJij-Dir.js";import"./TextField-DR1HR1Yl.js";import"./Input-CcbBYK0u.js";import"./useTextField-DGq00xI3.js";import"./TextField.module-DpzeWGpt.js";import"./intlStrings-ZMTSFH_M.js";import"./ListBox-A9gRE02u.js";import"./DragAndDrop-hK6s3wDl.js";import"./inertValue-BYJcJTjN.js";import"./useListState-Dlmbl2cl.js";import"./Tag-Br1Q3-3u.js";import"./useHighlightSelectionDescription-Ch5H8-D7.js";import"./useUpdateEffect-DVhd3ArW.js";import"./useHasTabbableChild-BZxdgcJE.js";import"./chevron-down-P4h50IJJ.js";import"./Virtualizer-BaLgNJ3R.js";import"./Button.module-Co5e5YHp.js";const Le={component:c,title:"Examples/Form",tags:["autodocs"],argTypes:{}},o={args:{},render:()=>{const m=["Banan","Apple","Mango"];return e.jsxs(d,{children:[e.jsx(i,{size:12,children:e.jsx(t,{label:"Ange ditt fullständiga namn",description:"Glöm inte dina eventuella mellannamn!"})}),e.jsx(i,{size:12,children:e.jsx(t,{label:"Personnummmer",description:"Anges på formen ÅÅMMDD-XXXX"})}),e.jsx(i,{size:12,children:e.jsx(l,{label:"Vilken är din favoritfrukt",placeholder:"Välj en frukt",selectionMode:"single",items:m.map(r=>({id:r,name:r})),children:r=>e.jsx(p,{...r,children:r.name})})}),e.jsx(i,{children:e.jsx(a,{children:"Skicka"})})]})}},s={args:{},render:()=>{const m=["A","B","C"],r=["Anledning A","Anledning B","Anledning C"];return e.jsx("div",{children:e.jsxs(d,{children:[e.jsx(i,{size:{xs:12,sm:6},children:e.jsx(x,{label:"Anledning",description:"Ange anledning till att du söker i databasen",children:r.map(n=>e.jsx(u,{value:n,children:n},n))})}),e.jsx(i,{size:{xs:12,sm:6},children:e.jsx(I,{label:"Databas",description:"Välj databas att söka i",children:m.map(n=>e.jsx(G,{value:n,children:n},n))})}),e.jsx(i,{size:{xs:12,sm:6},children:e.jsx(t,{label:"Namn",description:""})}),e.jsx(i,{size:{xs:12,sm:6},children:e.jsx(t,{label:"Personnummer"})}),e.jsx(i,{size:{xs:12,sm:6},children:e.jsx(l,{label:"Kön",description:"Kan lämnas tomt",placeholder:"Välj kön",selectionMode:"single",items:m.map(n=>({name:n,id:n})),children:n=>e.jsx(p,{...n,children:n.name})})}),e.jsx(i,{size:{xs:12,sm:6},children:e.jsx(t,{label:"Ärendekod"})}),e.jsx(i,{size:"auto",children:e.jsx(a,{children:"Sök"})}),e.jsx(i,{size:"auto",children:e.jsx(a,{variant:"secondary",children:"Rensa"})})]})})}};o.parameters={...o.parameters,docs:{...o.parameters?.docs,source:{originalSource:`{
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
