import{j as e}from"./iframe-Bb5Ll2Q_.js";import{$ as c}from"./Form-DMk9kVb1.js";import{G as d}from"./Grid-DiIsueac.js";import{G as i}from"./GridItem-CFYbepuA.js";import{T as t}from"./TextField-DUbtTFf0.js";import{S as l}from"./Select-4jW3PuFp.js";import{B as a}from"./Button-DcMiNBaO.js";import{R as x,a as u}from"./Radio-R2_RJUMB.js";import{C as I}from"./CheckboxGroup-BjMmhVmv.js";import{C as G}from"./Checkbox-CcTGHZJn.js";import{L as p}from"./ListBoxItem-D4j_hnfQ.js";import"./preload-helper-PPVm8Dsz.js";import"./utils-DUu2sqhX.js";import"./clsx-B-dksMZM.js";import"./useFormValidation-CmG_kr67.js";import"./useFocusRing-Che-PLf9.js";import"./index-hJZDNH39.js";import"./index-DaWpECPB.js";import"./clsx-Ciqy0D92.js";import"./TextFieldBase-DocnODon.js";import"./TextField-BSZpouzF.js";import"./FieldError-DHSOLBGK.js";import"./Text-ATBrkPw2.js";import"./Text-DGL_pGNa.js";import"./RSPContexts-BF108fh5.js";import"./Group-xUoghdpe.js";import"./Input-COsfqzdN.js";import"./Hidden-CIkUgucj.js";import"./Button-CLgs0RHO.js";import"./useLabels-B4ytSInX.js";import"./useButton-Drix0Soe.js";import"./useTextField-Crat3jGl.js";import"./useControlledState-CQTokbDY.js";import"./useField-SUENPtea.js";import"./TextField.module-1-_3qsJZ.js";import"./Label-BfGjPsAJ.js";import"./Dialog-CsqxZxHZ.js";import"./OverlayArrow-DIocl6xa.js";import"./useResizeObserver-DQ_T9M9d.js";import"./Collection-DcqfTVLD.js";import"./index-DIszDctj.js";import"./Separator-CDZt8W4n.js";import"./SelectionManager-CNhGT5Rw.js";import"./useEvent-DFeGPwZo.js";import"./scrollIntoView-xcKTDZvX.js";import"./SelectionIndicator-v0XOazhO.js";import"./useDescription-C_IELAs0.js";import"./ListKeyboardDelegate-B6kaB3YJ.js";import"./PressResponder-CFEyG_-H.js";import"./useLocalizedStringFormatter-BmXF49Fn.js";import"./LocalizedStringFormatter-wnoc2RuQ.js";import"./getScrollParent-Dwp_thdi.js";import"./VisuallyHidden-BT0heQ-H.js";import"./x-na7-pW2Y.js";import"./createLucideIcon-BTIRr7kd.js";import"./useLocalizedStringFormatter-r0kj4Pje.js";import"./Heading-nnfuclA9.js";import"./info-DpzzwP6m.js";import"./Popover-Bf4yOUJ_.js";import"./intlStrings-ZMTSFH_M.js";import"./ListBox-BtFhJz90.js";import"./DragAndDrop-B_295A9B.js";import"./inertValue-c_a9waCb.js";import"./useListState-CLzGEaWh.js";import"./Tag-CBbo27XE.js";import"./useHighlightSelectionDescription-CsOrBwbJ.js";import"./useUpdateEffect-BM2yZZaO.js";import"./useHasTabbableChild-CjVV7m0M.js";import"./chevron-down-DbN51glq.js";import"./Button.module-CtQ1deO8.js";import"./check-RuETopJR.js";import"./useToggleState-CI7SSzxa.js";import"./Virtualizer-BHXFc3tL.js";const Xe={component:c,title:"Examples/Form",tags:["autodocs"],argTypes:{}},o={args:{},render:()=>{const m=["Banan","Apple","Mango"];return e.jsxs(d,{children:[e.jsx(i,{size:12,children:e.jsx(t,{label:"Ange ditt fullständiga namn",description:"Glöm inte dina eventuella mellannamn!"})}),e.jsx(i,{size:12,children:e.jsx(t,{label:"Personnummmer",description:"Anges på formen ÅÅMMDD-XXXX"})}),e.jsx(i,{size:12,children:e.jsx(l,{label:"Vilken är din favoritfrukt",placeholder:"Välj en frukt",selectionMode:"single",items:m.map(r=>({id:r,name:r})),children:r=>e.jsx(p,{...r,children:r.name})})}),e.jsx(i,{children:e.jsx(a,{children:"Skicka"})})]})}},s={args:{},render:()=>{const m=["A","B","C"],r=["Anledning A","Anledning B","Anledning C"];return e.jsx("div",{children:e.jsxs(d,{children:[e.jsx(i,{size:{xs:12,sm:6},children:e.jsx(x,{label:"Anledning",description:"Ange anledning till att du söker i databasen",children:r.map(n=>e.jsx(u,{value:n,children:n},n))})}),e.jsx(i,{size:{xs:12,sm:6},children:e.jsx(I,{label:"Databas",description:"Välj databas att söka i",children:m.map(n=>e.jsx(G,{value:n,children:n},n))})}),e.jsx(i,{size:{xs:12,sm:6},children:e.jsx(t,{label:"Namn",description:""})}),e.jsx(i,{size:{xs:12,sm:6},children:e.jsx(t,{label:"Personnummer"})}),e.jsx(i,{size:{xs:12,sm:6},children:e.jsx(l,{label:"Kön",description:"Kan lämnas tomt",placeholder:"Välj kön",selectionMode:"single",items:m.map(n=>({name:n,id:n})),children:n=>e.jsx(p,{...n,children:n.name})})}),e.jsx(i,{size:{xs:12,sm:6},children:e.jsx(t,{label:"Ärendekod"})}),e.jsx(i,{size:"auto",children:e.jsx(a,{children:"Sök"})}),e.jsx(i,{size:"auto",children:e.jsx(a,{variant:"secondary",children:"Rensa"})})]})})}};o.parameters={...o.parameters,docs:{...o.parameters?.docs,source:{originalSource:`{
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
