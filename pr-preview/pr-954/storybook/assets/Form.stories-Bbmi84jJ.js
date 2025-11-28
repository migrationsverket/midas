import{j as e}from"./iframe-B_gFPxCX.js";import{$ as c}from"./Form-EaBlFtq8.js";import{G as d}from"./Grid-CFIvYrO7.js";import{G as i}from"./GridItem-BNmIl306.js";import{T as t}from"./TextField-tI76vhpa.js";import{S as l}from"./Select-CBs6Srgw.js";import{B as a}from"./Button-CMmiPFF7.js";import{R as x,a as u}from"./Radio-BPgE_q22.js";import{C as I}from"./CheckboxGroup-33lzRS05.js";import{C as G}from"./Checkbox-C8N2OX3U.js";import{L as p}from"./ListBoxItem-Bn-HbYC9.js";import"./preload-helper-PPVm8Dsz.js";import"./utils-Du2m8pi6.js";import"./clsx-B-dksMZM.js";import"./useFormValidation-6JoG4g-D.js";import"./useFocusRing-B_f_9ZIB.js";import"./index-BmP6HVCy.js";import"./index-Bk1XN2WI.js";import"./clsx-Ciqy0D92.js";import"./TextFieldBase-w646sgPe.js";import"./TextField-Clk-pP_g.js";import"./FieldError-BRP4YCh0.js";import"./Text-Cy6zixyL.js";import"./Text-Ccf4bkuw.js";import"./RSPContexts-DOLdHzZj.js";import"./Group-8Xs049YL.js";import"./Input-BjHegih_.js";import"./Hidden-OS0LVvpv.js";import"./Button-Dh_N8FAk.js";import"./useLabels-CKCRW4zl.js";import"./useButton-CXzrlu1a.js";import"./useTextField-C5iNfsRz.js";import"./useControlledState-x6V7bWVY.js";import"./useField-DtPq_gCn.js";import"./TextField.module-1-_3qsJZ.js";import"./Label-BH4o83cx.js";import"./Dialog-DOPSq2FJ.js";import"./OverlayArrow-_O_zpamE.js";import"./useResizeObserver-BDLi-sOw.js";import"./Collection-B5g4Ji_P.js";import"./index-r0j0FupA.js";import"./Separator-CH6clOTP.js";import"./SelectionManager-DjNIWJ5d.js";import"./useEvent-C8IsYOHI.js";import"./scrollIntoView-vBXGo_Pf.js";import"./SelectionIndicator-arulDhFq.js";import"./useDescription-BgYJLdYq.js";import"./ListKeyboardDelegate-B7RsbFFa.js";import"./PressResponder-CpdHDAqB.js";import"./useLocalizedStringFormatter-DfaT6UQu.js";import"./LocalizedStringFormatter-wnoc2RuQ.js";import"./getScrollParent-Cy2bhqUS.js";import"./VisuallyHidden-Ds2FNi3l.js";import"./x-BWZmfWmr.js";import"./createLucideIcon-C8OA8uCW.js";import"./useLocalizedStringFormatter-DSk1S1l2.js";import"./Heading-CTpAMjcl.js";import"./info-B5JFIP-w.js";import"./Popover-Dpw8Pi7B.js";import"./intlStrings-ZMTSFH_M.js";import"./ListBox-B8bpm6Pq.js";import"./DragAndDrop-CYQNEQyr.js";import"./inertValue-B-KUn86v.js";import"./useListState-BnZFl5kD.js";import"./Tag-B_R1DTUV.js";import"./useHighlightSelectionDescription-gcNzS4J-.js";import"./useUpdateEffect-GhZxI3TO.js";import"./useHasTabbableChild-CFAbdhR-.js";import"./chevron-down-BfzY-IH6.js";import"./Button.module-CtQ1deO8.js";import"./check-_6DbxIZV.js";import"./useToggleState-B_B4aZ-b.js";import"./Virtualizer-Dnz_ioPP.js";const Xe={component:c,title:"Examples/Form",tags:["autodocs"],argTypes:{}},o={args:{},render:()=>{const m=["Banan","Apple","Mango"];return e.jsxs(d,{children:[e.jsx(i,{size:12,children:e.jsx(t,{label:"Ange ditt fullständiga namn",description:"Glöm inte dina eventuella mellannamn!"})}),e.jsx(i,{size:12,children:e.jsx(t,{label:"Personnummmer",description:"Anges på formen ÅÅMMDD-XXXX"})}),e.jsx(i,{size:12,children:e.jsx(l,{label:"Vilken är din favoritfrukt",placeholder:"Välj en frukt",selectionMode:"single",items:m.map(r=>({id:r,name:r})),children:r=>e.jsx(p,{...r,children:r.name})})}),e.jsx(i,{children:e.jsx(a,{children:"Skicka"})})]})}},s={args:{},render:()=>{const m=["A","B","C"],r=["Anledning A","Anledning B","Anledning C"];return e.jsx("div",{children:e.jsxs(d,{children:[e.jsx(i,{size:{xs:12,sm:6},children:e.jsx(x,{label:"Anledning",description:"Ange anledning till att du söker i databasen",children:r.map(n=>e.jsx(u,{value:n,children:n},n))})}),e.jsx(i,{size:{xs:12,sm:6},children:e.jsx(I,{label:"Databas",description:"Välj databas att söka i",children:m.map(n=>e.jsx(G,{value:n,children:n},n))})}),e.jsx(i,{size:{xs:12,sm:6},children:e.jsx(t,{label:"Namn",description:""})}),e.jsx(i,{size:{xs:12,sm:6},children:e.jsx(t,{label:"Personnummer"})}),e.jsx(i,{size:{xs:12,sm:6},children:e.jsx(l,{label:"Kön",description:"Kan lämnas tomt",placeholder:"Välj kön",selectionMode:"single",items:m.map(n=>({name:n,id:n})),children:n=>e.jsx(p,{...n,children:n.name})})}),e.jsx(i,{size:{xs:12,sm:6},children:e.jsx(t,{label:"Ärendekod"})}),e.jsx(i,{size:"auto",children:e.jsx(a,{children:"Sök"})}),e.jsx(i,{size:"auto",children:e.jsx(a,{variant:"secondary",children:"Rensa"})})]})})}};o.parameters={...o.parameters,docs:{...o.parameters?.docs,source:{originalSource:`{
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
