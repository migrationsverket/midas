import{j as e}from"./iframe-BXluW0qw.js";import{$ as c}from"./Form-l6KsTUw2.js";import{G as d}from"./Grid-QZPcdLMq.js";import{G as i}from"./GridItem-DWJX2pUl.js";import{T as t}from"./TextField-D3bsqroG.js";import{S as l}from"./Select-C1DRLJlv.js";import{B as a}from"./Button-BBVzxyIb.js";import{R as x,a as u}from"./Radio-DDMb3A7o.js";import{C as I}from"./CheckboxGroup-BWna1Ls4.js";import{C as G}from"./Checkbox-BBeyfh0w.js";import{L as p}from"./ListBoxItem-8EB8Qtgh.js";import"./preload-helper-PPVm8Dsz.js";import"./utils-qhqCas48.js";import"./clsx-B-dksMZM.js";import"./useFormValidation-DbID4Z4G.js";import"./useFocusRing-hYKFtLyc.js";import"./index-Cz-tQ20r.js";import"./index-Czak5Xsp.js";import"./clsx-Ciqy0D92.js";import"./TextFieldBase-Bt8R4MJH.js";import"./TextField-DNzh4F88.js";import"./FieldError-DkGWPtYI.js";import"./Text-D4saPv-u.js";import"./Text-jsh445C9.js";import"./RSPContexts-CiUO47lm.js";import"./Group-BkeJd56N.js";import"./Input-FPSl9U_g.js";import"./Hidden-Dj90_01P.js";import"./Button-D751rG_Q.js";import"./useLabels-D-uykTL3.js";import"./useButton-sK7GQKK3.js";import"./useTextField-C3NjQCuZ.js";import"./useControlledState-DQw7CMNY.js";import"./useField-DWbyryzg.js";import"./TextField.module-CgqiUiYQ.js";import"./Label-Dz5nrdFW.js";import"./Dialog-D--hf2tk.js";import"./OverlayArrow-CI_PcWVK.js";import"./useResizeObserver-CJSlKTuU.js";import"./Collection-LFwfl5_M.js";import"./index-jBsa-1DK.js";import"./Separator-BGxX7Hvs.js";import"./SelectionManager-JTF8g9_5.js";import"./useEvent-BA_ZQV4c.js";import"./scrollIntoView-CtWAMHuk.js";import"./SelectionIndicator-Ci8YD20B.js";import"./useDescription-BXiuV7mk.js";import"./ListKeyboardDelegate-CHFQe9A5.js";import"./PressResponder-BWX5znY8.js";import"./useLocalizedStringFormatter-D2jEh7gz.js";import"./LocalizedStringFormatter-wnoc2RuQ.js";import"./animation-Cz6zEb9E.js";import"./getScrollParent-Cpn7MDkE.js";import"./VisuallyHidden-BRFl4D4u.js";import"./x-CRtOwHXc.js";import"./createLucideIcon-CuvupPzO.js";import"./useLocalizedStringFormatter-C8r3sehO.js";import"./Heading-DLg79cXd.js";import"./info-ekQ0lT2T.js";import"./Popover-Bo_8rdx6.js";import"./intlStrings-ZMTSFH_M.js";import"./ListBox-BA80ZHGk.js";import"./DragAndDrop-X1DwENZJ.js";import"./inertValue-yYwG_1yZ.js";import"./useListState-DyhQkaJD.js";import"./Tag-Cvs7-MRl.js";import"./useHighlightSelectionDescription-CP3sFeTi.js";import"./useUpdateEffect-CJcCqUFK.js";import"./useHasTabbableChild-Bm-98UDt.js";import"./chevron-down-BLAN73cG.js";import"./Button.module-CIvIJ45H.js";import"./check-DxXsh-ly.js";import"./useToggleState-2N-q0n2B.js";import"./Virtualizer-DwaS0x2x.js";const Le={component:c,title:"Examples/Form",tags:["autodocs"],argTypes:{}},o={args:{},render:()=>{const m=["Banan","Apple","Mango"];return e.jsxs(d,{children:[e.jsx(i,{size:12,children:e.jsx(t,{label:"Ange ditt fullständiga namn",description:"Glöm inte dina eventuella mellannamn!"})}),e.jsx(i,{size:12,children:e.jsx(t,{label:"Personnummmer",description:"Anges på formen ÅÅMMDD-XXXX"})}),e.jsx(i,{size:12,children:e.jsx(l,{label:"Vilken är din favoritfrukt",placeholder:"Välj en frukt",selectionMode:"single",items:m.map(r=>({id:r,name:r})),children:r=>e.jsx(p,{...r,children:r.name})})}),e.jsx(i,{children:e.jsx(a,{children:"Skicka"})})]})}},s={args:{},render:()=>{const m=["A","B","C"],r=["Anledning A","Anledning B","Anledning C"];return e.jsx("div",{children:e.jsxs(d,{children:[e.jsx(i,{size:{xs:12,sm:6},children:e.jsx(x,{label:"Anledning",description:"Ange anledning till att du söker i databasen",children:r.map(n=>e.jsx(u,{value:n,children:n},n))})}),e.jsx(i,{size:{xs:12,sm:6},children:e.jsx(I,{label:"Databas",description:"Välj databas att söka i",children:m.map(n=>e.jsx(G,{value:n,children:n},n))})}),e.jsx(i,{size:{xs:12,sm:6},children:e.jsx(t,{label:"Namn",description:""})}),e.jsx(i,{size:{xs:12,sm:6},children:e.jsx(t,{label:"Personnummer"})}),e.jsx(i,{size:{xs:12,sm:6},children:e.jsx(l,{label:"Kön",description:"Kan lämnas tomt",placeholder:"Välj kön",selectionMode:"single",items:m.map(n=>({name:n,id:n})),children:n=>e.jsx(p,{...n,children:n.name})})}),e.jsx(i,{size:{xs:12,sm:6},children:e.jsx(t,{label:"Ärendekod"})}),e.jsx(i,{size:"auto",children:e.jsx(a,{children:"Sök"})}),e.jsx(i,{size:"auto",children:e.jsx(a,{variant:"secondary",children:"Rensa"})})]})})}};o.parameters={...o.parameters,docs:{...o.parameters?.docs,source:{originalSource:`{
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
