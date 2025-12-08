import{j as e}from"./iframe-h7DJPtOw.js";import{$ as c}from"./Form-c2mv9S55.js";import{G as d}from"./Grid-DfF68XRa.js";import{G as i}from"./GridItem-DXHA5IA-.js";import{T as t}from"./TextField-gY3rdWSi.js";import{S as l}from"./Select-nqbLhh96.js";import{B as a}from"./Button-CJ449eRf.js";import{R as x,a as u}from"./Radio-Bo7g00ZI.js";import{C as I}from"./CheckboxGroup-R_SeVWw3.js";import{C as G}from"./Checkbox-BIj58FdS.js";import{L as p}from"./ListBoxItem-TGs9FQI3.js";import"./preload-helper-PPVm8Dsz.js";import"./utils-B7-Bl9CW.js";import"./clsx-B-dksMZM.js";import"./useFormValidation-DVnx7CoV.js";import"./useFocusRing-C0B_q-wz.js";import"./index-gfjDpAp0.js";import"./index-B7hCCELA.js";import"./clsx-Ciqy0D92.js";import"./TextFieldBase-MW5jcOei.js";import"./TextField-LSsyExY3.js";import"./FieldError-DSs28XHB.js";import"./Text-zGp9it5Y.js";import"./Text-pnui6lio.js";import"./RSPContexts-CHFDj9zC.js";import"./Group-C1gr5TL9.js";import"./Input-RqX7WhgN.js";import"./Hidden-PJsUPrnx.js";import"./Button-Bz7LmfPv.js";import"./useLabels-CUHQrXEe.js";import"./useButton-D0LQ7Q37.js";import"./useTextField-6f_cLbpm.js";import"./useControlledState-CHLpwHvy.js";import"./useField-BwCSMjcm.js";import"./TextField.module-CgqiUiYQ.js";import"./Label-BDhooHWI.js";import"./Dialog-C7IIzuYp.js";import"./OverlayArrow-BgIc1esP.js";import"./useResizeObserver-Dj2MVZVc.js";import"./Collection-dPIksrtz.js";import"./index-B6Wg72uJ.js";import"./Separator-tDLzujqY.js";import"./SelectionManager-Blqy6USp.js";import"./useEvent-F0VW7Ro7.js";import"./scrollIntoView-CTHtuwhy.js";import"./SelectionIndicator-Bd1YUc_h.js";import"./useDescription-CjXQS0Cs.js";import"./ListKeyboardDelegate-P0Ijk9LY.js";import"./PressResponder-CtxkqonA.js";import"./useLocalizedStringFormatter-BcxKr6tQ.js";import"./LocalizedStringFormatter-wnoc2RuQ.js";import"./getScrollParent-DwNXqpWq.js";import"./VisuallyHidden-CWdOAX5N.js";import"./x-BbFSvcrs.js";import"./createLucideIcon-CfnHEixt.js";import"./useLocalizedStringFormatter-CUL5z0zQ.js";import"./Heading-3fa6_PGE.js";import"./info-i6cdOdrR.js";import"./Popover-_VbJ2NJm.js";import"./intlStrings-ZMTSFH_M.js";import"./ListBox-E_5GBCdt.js";import"./DragAndDrop-CeGXVKtB.js";import"./inertValue-BqDfc8Zp.js";import"./useListState-BzqabFGK.js";import"./Tag-DtHBC9qs.js";import"./useHighlightSelectionDescription-BpQkgFJD.js";import"./useUpdateEffect-BsjQv1tz.js";import"./useHasTabbableChild-C12u4RrZ.js";import"./chevron-down-CElyi3SZ.js";import"./Button.module-Co5e5YHp.js";import"./check-CL_plnTd.js";import"./useToggleState-7rlRFvKc.js";import"./Virtualizer-C_cvADH4.js";const Xe={component:c,title:"Examples/Form",tags:["autodocs"],argTypes:{}},o={args:{},render:()=>{const m=["Banan","Apple","Mango"];return e.jsxs(d,{children:[e.jsx(i,{size:12,children:e.jsx(t,{label:"Ange ditt fullständiga namn",description:"Glöm inte dina eventuella mellannamn!"})}),e.jsx(i,{size:12,children:e.jsx(t,{label:"Personnummmer",description:"Anges på formen ÅÅMMDD-XXXX"})}),e.jsx(i,{size:12,children:e.jsx(l,{label:"Vilken är din favoritfrukt",placeholder:"Välj en frukt",selectionMode:"single",items:m.map(r=>({id:r,name:r})),children:r=>e.jsx(p,{...r,children:r.name})})}),e.jsx(i,{children:e.jsx(a,{children:"Skicka"})})]})}},s={args:{},render:()=>{const m=["A","B","C"],r=["Anledning A","Anledning B","Anledning C"];return e.jsx("div",{children:e.jsxs(d,{children:[e.jsx(i,{size:{xs:12,sm:6},children:e.jsx(x,{label:"Anledning",description:"Ange anledning till att du söker i databasen",children:r.map(n=>e.jsx(u,{value:n,children:n},n))})}),e.jsx(i,{size:{xs:12,sm:6},children:e.jsx(I,{label:"Databas",description:"Välj databas att söka i",children:m.map(n=>e.jsx(G,{value:n,children:n},n))})}),e.jsx(i,{size:{xs:12,sm:6},children:e.jsx(t,{label:"Namn",description:""})}),e.jsx(i,{size:{xs:12,sm:6},children:e.jsx(t,{label:"Personnummer"})}),e.jsx(i,{size:{xs:12,sm:6},children:e.jsx(l,{label:"Kön",description:"Kan lämnas tomt",placeholder:"Välj kön",selectionMode:"single",items:m.map(n=>({name:n,id:n})),children:n=>e.jsx(p,{...n,children:n.name})})}),e.jsx(i,{size:{xs:12,sm:6},children:e.jsx(t,{label:"Ärendekod"})}),e.jsx(i,{size:"auto",children:e.jsx(a,{children:"Sök"})}),e.jsx(i,{size:"auto",children:e.jsx(a,{variant:"secondary",children:"Rensa"})})]})})}};o.parameters={...o.parameters,docs:{...o.parameters?.docs,source:{originalSource:`{
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
