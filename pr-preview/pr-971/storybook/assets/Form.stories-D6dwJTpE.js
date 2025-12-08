import{j as e}from"./iframe--mmKoKlF.js";import{$ as c}from"./Form-B-jKSIj2.js";import{G as d}from"./Grid-S1hAODC-.js";import{G as i}from"./GridItem-D6LKNr78.js";import{T as t}from"./TextField-DPaZfKHk.js";import{S as l}from"./Select-C0qt6RDq.js";import{B as a}from"./Button-DFSRLbW3.js";import{R as x,a as u}from"./Radio-CfHRM3ln.js";import{C as I}from"./CheckboxGroup-B-hfjFaS.js";import{C as G}from"./Checkbox-B1S8Gb0G.js";import{L as p}from"./ListBoxItem-DuEvgYwM.js";import"./preload-helper-PPVm8Dsz.js";import"./utils-Co0PR--s.js";import"./clsx-B-dksMZM.js";import"./useFormValidation-onPnYTY4.js";import"./useFocusRing-ElKf8bcK.js";import"./index-DlIPfWxH.js";import"./index-xyOEGRTy.js";import"./clsx-Ciqy0D92.js";import"./TextFieldBase-CjYvOaf9.js";import"./TextField-CHiSlXaw.js";import"./FieldError-DWqeJHep.js";import"./Text-CHGY53Du.js";import"./Text-CcHRZ_Ad.js";import"./RSPContexts-DKKk_j71.js";import"./Group-4L5jmKpW.js";import"./Input-DC5COniI.js";import"./Hidden-DQTVfJps.js";import"./Button-K9IUFIHc.js";import"./useLabels-C4a0JBZG.js";import"./useButton-DQXgnmsH.js";import"./useTextField-D3YbBk2X.js";import"./useControlledState-CQsF2XT8.js";import"./useField-cCn2FxJC.js";import"./TextField.module-CgqiUiYQ.js";import"./Label-BvdJ_PVT.js";import"./Dialog-DsuLDIhD.js";import"./OverlayArrow-DYFMpSyG.js";import"./useResizeObserver-DQFCRLRb.js";import"./Collection-ClKUL4Xc.js";import"./index-DQVTQaJh.js";import"./Separator-Cbh_hhQM.js";import"./SelectionManager-BAuPHQF0.js";import"./useEvent-B3elpXMT.js";import"./scrollIntoView-CpXiwoWy.js";import"./SelectionIndicator-9X03VIX3.js";import"./useDescription-C1dzGSna.js";import"./ListKeyboardDelegate-CsPGxZ-G.js";import"./PressResponder-DVMy69UW.js";import"./useLocalizedStringFormatter-CvAW3YIB.js";import"./LocalizedStringFormatter-wnoc2RuQ.js";import"./getScrollParent-wkXY2yUz.js";import"./VisuallyHidden-7b4qEDFn.js";import"./x-BUgJA5vH.js";import"./createLucideIcon-LTD4_Te-.js";import"./useLocalizedStringFormatter-C1Y7m_4-.js";import"./Heading-CYGpAeti.js";import"./info-D2Sb3MzX.js";import"./Popover-Kg3awBSz.js";import"./intlStrings-ZMTSFH_M.js";import"./ListBox-m87lHbgN.js";import"./DragAndDrop-D2kn3sJ7.js";import"./inertValue-tM3MZDh8.js";import"./useListState-DBmcddME.js";import"./Tag-cG5UKwku.js";import"./useHighlightSelectionDescription-BcFRwawP.js";import"./useUpdateEffect-BdS-IEYS.js";import"./useHasTabbableChild-fd4nWuyn.js";import"./chevron-down-CbRNPwqC.js";import"./Button.module-Co5e5YHp.js";import"./check-DPzdq8YJ.js";import"./useToggleState-BoeXAX2L.js";import"./Virtualizer-Cd7GRS1c.js";const Xe={component:c,title:"Examples/Form",tags:["autodocs"],argTypes:{}},o={args:{},render:()=>{const m=["Banan","Apple","Mango"];return e.jsxs(d,{children:[e.jsx(i,{size:12,children:e.jsx(t,{label:"Ange ditt fullständiga namn",description:"Glöm inte dina eventuella mellannamn!"})}),e.jsx(i,{size:12,children:e.jsx(t,{label:"Personnummmer",description:"Anges på formen ÅÅMMDD-XXXX"})}),e.jsx(i,{size:12,children:e.jsx(l,{label:"Vilken är din favoritfrukt",placeholder:"Välj en frukt",selectionMode:"single",items:m.map(r=>({id:r,name:r})),children:r=>e.jsx(p,{...r,children:r.name})})}),e.jsx(i,{children:e.jsx(a,{children:"Skicka"})})]})}},s={args:{},render:()=>{const m=["A","B","C"],r=["Anledning A","Anledning B","Anledning C"];return e.jsx("div",{children:e.jsxs(d,{children:[e.jsx(i,{size:{xs:12,sm:6},children:e.jsx(x,{label:"Anledning",description:"Ange anledning till att du söker i databasen",children:r.map(n=>e.jsx(u,{value:n,children:n},n))})}),e.jsx(i,{size:{xs:12,sm:6},children:e.jsx(I,{label:"Databas",description:"Välj databas att söka i",children:m.map(n=>e.jsx(G,{value:n,children:n},n))})}),e.jsx(i,{size:{xs:12,sm:6},children:e.jsx(t,{label:"Namn",description:""})}),e.jsx(i,{size:{xs:12,sm:6},children:e.jsx(t,{label:"Personnummer"})}),e.jsx(i,{size:{xs:12,sm:6},children:e.jsx(l,{label:"Kön",description:"Kan lämnas tomt",placeholder:"Välj kön",selectionMode:"single",items:m.map(n=>({name:n,id:n})),children:n=>e.jsx(p,{...n,children:n.name})})}),e.jsx(i,{size:{xs:12,sm:6},children:e.jsx(t,{label:"Ärendekod"})}),e.jsx(i,{size:"auto",children:e.jsx(a,{children:"Sök"})}),e.jsx(i,{size:"auto",children:e.jsx(a,{variant:"secondary",children:"Rensa"})})]})})}};o.parameters={...o.parameters,docs:{...o.parameters?.docs,source:{originalSource:`{
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
