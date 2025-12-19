import{j as e}from"./iframe-y3RQudkV.js";import{$ as c}from"./Form-dHvJf-tT.js";import{G as d}from"./Grid-DYAm-Lfm.js";import{G as i}from"./GridItem-B8kCPd4c.js";import{T as t}from"./TextField-DGILOv5t.js";import{S as l}from"./Select-CTv_sLP-.js";import{B as a}from"./Button-C6bCh7AW.js";import{R as x,a as u}from"./Radio-j3mL1Ntf.js";import{C as I}from"./CheckboxGroup-B26YgP7y.js";import{C as G}from"./Checkbox-BjeDw5MN.js";import{L as p}from"./ListBoxItem-Cm5LrPy-.js";import"./preload-helper-PPVm8Dsz.js";import"./utils-CLUQEgK0.js";import"./clsx-B-dksMZM.js";import"./useFormValidation-CZmsk4ZH.js";import"./useFocusRing-D6jKEede.js";import"./index-Btmjqavz.js";import"./index-C_jNHA4R.js";import"./clsx-Ciqy0D92.js";import"./TextFieldBase-D0klzrhl.js";import"./TextField-COUCBOGE.js";import"./FieldError-DbTKGFTi.js";import"./Text-Blof-eBx.js";import"./Text-BJza01K7.js";import"./RSPContexts-CQGJwvaW.js";import"./Group-B7ke1c5b.js";import"./Input-xrl2HnGU.js";import"./Hidden-X5-u2uqU.js";import"./Button-CIEvAO1z.js";import"./useLabels-C6A1w6dP.js";import"./useButton-DvV-S-Re.js";import"./useTextField-JGXsKiI_.js";import"./useControlledState-BlejUV3u.js";import"./useField-hggg6uU5.js";import"./TextField.module-CgqiUiYQ.js";import"./Label-CEFq0DJl.js";import"./Dialog-VGUqn1LF.js";import"./OverlayArrow-QmqVuTqB.js";import"./useResizeObserver-DLCfIb8d.js";import"./Collection-mBq74uji.js";import"./index-DVxUphre.js";import"./Separator-BDJXd-hv.js";import"./SelectionManager-BbR-yjHl.js";import"./useEvent-BspRHKlr.js";import"./scrollIntoView-CtWAMHuk.js";import"./SelectionIndicator-CHISNaEV.js";import"./useDescription-pAch1eL8.js";import"./ListKeyboardDelegate-BC7dvwtv.js";import"./PressResponder-B002mKCy.js";import"./useLocalizedStringFormatter-02llwVfA.js";import"./LocalizedStringFormatter-wnoc2RuQ.js";import"./animation-DabMCYse.js";import"./getScrollParent-Cpn7MDkE.js";import"./VisuallyHidden-CodUiT0u.js";import"./x-DAS3UPTm.js";import"./createLucideIcon-DRJFQYBk.js";import"./useLocalizedStringFormatter-CNW12ox4.js";import"./Heading-DviOwGmS.js";import"./info-D5rdsSr_.js";import"./Popover-BvcQrqZ5.js";import"./intlStrings-ZMTSFH_M.js";import"./ListBox-Do2JHMgt.js";import"./DragAndDrop-CWBmqCCF.js";import"./inertValue-Bml2RoL1.js";import"./useListState-CbOPsdcj.js";import"./Tag-BjDZXiBP.js";import"./useHighlightSelectionDescription-DcF5X0l3.js";import"./useUpdateEffect-D_SVLlUd.js";import"./useHasTabbableChild-DS9SC5ZN.js";import"./chevron-down-s-aT8izb.js";import"./Button.module-Co5e5YHp.js";import"./check-DTdhvA6u.js";import"./useToggleState-SQAuoitu.js";import"./Virtualizer-DvvisAQq.js";const Le={component:c,title:"Examples/Form",tags:["autodocs"],argTypes:{}},o={args:{},render:()=>{const m=["Banan","Apple","Mango"];return e.jsxs(d,{children:[e.jsx(i,{size:12,children:e.jsx(t,{label:"Ange ditt fullständiga namn",description:"Glöm inte dina eventuella mellannamn!"})}),e.jsx(i,{size:12,children:e.jsx(t,{label:"Personnummmer",description:"Anges på formen ÅÅMMDD-XXXX"})}),e.jsx(i,{size:12,children:e.jsx(l,{label:"Vilken är din favoritfrukt",placeholder:"Välj en frukt",selectionMode:"single",items:m.map(r=>({id:r,name:r})),children:r=>e.jsx(p,{...r,children:r.name})})}),e.jsx(i,{children:e.jsx(a,{children:"Skicka"})})]})}},s={args:{},render:()=>{const m=["A","B","C"],r=["Anledning A","Anledning B","Anledning C"];return e.jsx("div",{children:e.jsxs(d,{children:[e.jsx(i,{size:{xs:12,sm:6},children:e.jsx(x,{label:"Anledning",description:"Ange anledning till att du söker i databasen",children:r.map(n=>e.jsx(u,{value:n,children:n},n))})}),e.jsx(i,{size:{xs:12,sm:6},children:e.jsx(I,{label:"Databas",description:"Välj databas att söka i",children:m.map(n=>e.jsx(G,{value:n,children:n},n))})}),e.jsx(i,{size:{xs:12,sm:6},children:e.jsx(t,{label:"Namn",description:""})}),e.jsx(i,{size:{xs:12,sm:6},children:e.jsx(t,{label:"Personnummer"})}),e.jsx(i,{size:{xs:12,sm:6},children:e.jsx(l,{label:"Kön",description:"Kan lämnas tomt",placeholder:"Välj kön",selectionMode:"single",items:m.map(n=>({name:n,id:n})),children:n=>e.jsx(p,{...n,children:n.name})})}),e.jsx(i,{size:{xs:12,sm:6},children:e.jsx(t,{label:"Ärendekod"})}),e.jsx(i,{size:"auto",children:e.jsx(a,{children:"Sök"})}),e.jsx(i,{size:"auto",children:e.jsx(a,{variant:"secondary",children:"Rensa"})})]})})}};o.parameters={...o.parameters,docs:{...o.parameters?.docs,source:{originalSource:`{
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
