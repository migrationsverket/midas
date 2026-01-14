import{j as e}from"./iframe-DALTSxsS.js";import{$ as c}from"./Form-Dq7HVupu.js";import{G as d}from"./Grid-Cdn7ux35.js";import{G as i}from"./GridItem-DQu_B9tl.js";import{T as t}from"./TextField-BOdecwfn.js";import{S as l}from"./Select-DHnX0DQg.js";import{B as a}from"./Button-Dq10fmnU.js";import{R as x,a as u}from"./Radio-DJ8Fkgn1.js";import{C as I}from"./CheckboxGroup-DL7gpk21.js";import{C as G}from"./Checkbox-1givwV6N.js";import{L as p}from"./ListBoxItem-CURtP-uc.js";import"./preload-helper-PPVm8Dsz.js";import"./utils-DhmNEjlk.js";import"./clsx-B-dksMZM.js";import"./useFormValidation-DMuhtnrm.js";import"./useFocusRing-D9a5eyQj.js";import"./index-ZpmiPRxE.js";import"./index-1lGZN6GB.js";import"./clsx-Ciqy0D92.js";import"./TextFieldBase-V8ShsdYt.js";import"./TextField-D8bymw0K.js";import"./FieldError-CNkTH6UQ.js";import"./Text-DUPMGpBd.js";import"./Text-QPtdxepC.js";import"./RSPContexts-DWTJMTK0.js";import"./Group-DyBed1IZ.js";import"./Input-KkAflIxH.js";import"./Hidden-BWGddJP9.js";import"./Button-BolZLxlI.js";import"./useLabels-RBjCfxHd.js";import"./useButton-DTVnyrV6.js";import"./useTextField-C-tP9hem.js";import"./useControlledState-Db3CL_cp.js";import"./useField-Bo5DVUfk.js";import"./TextField.module-CgqiUiYQ.js";import"./Label-DTr6YgZ2.js";import"./Dialog-epNG4iu2.js";import"./OverlayArrow-BbfpKb2i.js";import"./useResizeObserver-o677WSrE.js";import"./Collection-CoXo-z-m.js";import"./index-CQSewXcr.js";import"./Separator-YZjW7xUm.js";import"./SelectionManager-D4xIimb0.js";import"./useEvent-So3QqFJd.js";import"./scrollIntoView-CtWAMHuk.js";import"./SelectionIndicator-D9XxgJ0V.js";import"./useDescription-CRMtKc5O.js";import"./ListKeyboardDelegate-Co-OCIhP.js";import"./PressResponder-BRhPcpR8.js";import"./useLocalizedStringFormatter-CYXYCABu.js";import"./LocalizedStringFormatter-wnoc2RuQ.js";import"./animation-BFOPqJoa.js";import"./getScrollParent-Cpn7MDkE.js";import"./VisuallyHidden-DziWvBuP.js";import"./x-4TwixKAW.js";import"./createLucideIcon-DnVmKfBY.js";import"./useLocalizedStringFormatter-CJVitUFs.js";import"./Heading-CP8R22Yb.js";import"./info-DjN0Evpm.js";import"./Popover-ZeBtdQRy.js";import"./intlStrings-ZMTSFH_M.js";import"./ListBox-BWf9w1m6.js";import"./DragAndDrop-CcnlVkoK.js";import"./inertValue-D-evgYYi.js";import"./useListState-BbHSNy0E.js";import"./Tag-CRYs0kty.js";import"./useHighlightSelectionDescription-DhgvABQB.js";import"./useUpdateEffect-CULF6a9H.js";import"./useHasTabbableChild-CTcR8bsD.js";import"./chevron-down-XmKpqJNV.js";import"./Button.module-Co5e5YHp.js";import"./check-DS6iHNyv.js";import"./useToggleState-CjVuWbUV.js";import"./Virtualizer-X-55nnW9.js";const Le={component:c,title:"Examples/Form",tags:["autodocs"],argTypes:{}},o={args:{},render:()=>{const m=["Banan","Apple","Mango"];return e.jsxs(d,{children:[e.jsx(i,{size:12,children:e.jsx(t,{label:"Ange ditt fullständiga namn",description:"Glöm inte dina eventuella mellannamn!"})}),e.jsx(i,{size:12,children:e.jsx(t,{label:"Personnummmer",description:"Anges på formen ÅÅMMDD-XXXX"})}),e.jsx(i,{size:12,children:e.jsx(l,{label:"Vilken är din favoritfrukt",placeholder:"Välj en frukt",selectionMode:"single",items:m.map(r=>({id:r,name:r})),children:r=>e.jsx(p,{...r,children:r.name})})}),e.jsx(i,{children:e.jsx(a,{children:"Skicka"})})]})}},s={args:{},render:()=>{const m=["A","B","C"],r=["Anledning A","Anledning B","Anledning C"];return e.jsx("div",{children:e.jsxs(d,{children:[e.jsx(i,{size:{xs:12,sm:6},children:e.jsx(x,{label:"Anledning",description:"Ange anledning till att du söker i databasen",children:r.map(n=>e.jsx(u,{value:n,children:n},n))})}),e.jsx(i,{size:{xs:12,sm:6},children:e.jsx(I,{label:"Databas",description:"Välj databas att söka i",children:m.map(n=>e.jsx(G,{value:n,children:n},n))})}),e.jsx(i,{size:{xs:12,sm:6},children:e.jsx(t,{label:"Namn",description:""})}),e.jsx(i,{size:{xs:12,sm:6},children:e.jsx(t,{label:"Personnummer"})}),e.jsx(i,{size:{xs:12,sm:6},children:e.jsx(l,{label:"Kön",description:"Kan lämnas tomt",placeholder:"Välj kön",selectionMode:"single",items:m.map(n=>({name:n,id:n})),children:n=>e.jsx(p,{...n,children:n.name})})}),e.jsx(i,{size:{xs:12,sm:6},children:e.jsx(t,{label:"Ärendekod"})}),e.jsx(i,{size:"auto",children:e.jsx(a,{children:"Sök"})}),e.jsx(i,{size:"auto",children:e.jsx(a,{variant:"secondary",children:"Rensa"})})]})})}};o.parameters={...o.parameters,docs:{...o.parameters?.docs,source:{originalSource:`{
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
