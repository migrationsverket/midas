import{j as e}from"./iframe-CutDFk5n.js";import{$ as c}from"./Form-BPYH9qYA.js";import{G as d}from"./Grid-D8iC8dqO.js";import{G as i}from"./GridItem-BZ62QV-x.js";import{T as t}from"./TextField-D0KEDmJO.js";import{S as l}from"./Select-CdCa4OFP.js";import{B as a}from"./Button-DdqPt2Xq.js";import{R as x,a as u}from"./Radio-CNWc8MCi.js";import{C as I}from"./CheckboxGroup-CrDlckKB.js";import{C as G}from"./Checkbox-CdjcESc2.js";import{L as p}from"./ListBoxItem-Dz5koGYc.js";import"./preload-helper-PPVm8Dsz.js";import"./utils-CTW1dxkN.js";import"./clsx-B-dksMZM.js";import"./useFormValidation-CdQWy_dH.js";import"./useFocusRing-4WXHNlg7.js";import"./index-Vo5448Qj.js";import"./index-DJz0Sx_u.js";import"./clsx-Ciqy0D92.js";import"./TextFieldBase-UJJzmS30.js";import"./TextField-ZsN7R5kI.js";import"./FieldError-DctkBoCn.js";import"./Text-DcyAgiDX.js";import"./Text-CgQQrWKF.js";import"./RSPContexts-DcYz2meL.js";import"./Group-C733-SSO.js";import"./Input-CvWQwxYC.js";import"./Hidden-CUK-mE4f.js";import"./Button-Dp5-D5M-.js";import"./useLabels-DY93YiY3.js";import"./useButton-Co8nMjNx.js";import"./useTextField-Cfya9ks1.js";import"./useControlledState-Cn8LkIR3.js";import"./useField-8cvfXJwd.js";import"./TextField.module-CgqiUiYQ.js";import"./Label-CuxiB2vu.js";import"./Dialog-DS8s0FRF.js";import"./OverlayArrow-DxCsWpOk.js";import"./useResizeObserver-DKgnP7cD.js";import"./Collection-C-hf73FU.js";import"./index-DiUBrakn.js";import"./Separator-00NY4bF5.js";import"./SelectionManager-Elmu4j6R.js";import"./useEvent-BeSsf5uU.js";import"./scrollIntoView-CtWAMHuk.js";import"./SelectionIndicator-BY7DJ66L.js";import"./useDescription-CHhNdst8.js";import"./ListKeyboardDelegate-J1swqCL2.js";import"./PressResponder-D-tSAkZz.js";import"./useLocalizedStringFormatter-b3cE-jas.js";import"./LocalizedStringFormatter-wnoc2RuQ.js";import"./animation-B_W1sumT.js";import"./getScrollParent-Cpn7MDkE.js";import"./VisuallyHidden-BPIRqvhu.js";import"./x-DzdF7VVd.js";import"./createLucideIcon-B80-lQ4U.js";import"./useLocalizedStringFormatter-ttEBQjzn.js";import"./Heading-TSmww82B.js";import"./info-BVVEa0Wk.js";import"./Popover-B1Ie_Pbs.js";import"./intlStrings-ZMTSFH_M.js";import"./ListBox-C1BHjpy3.js";import"./DragAndDrop-CXri6yG_.js";import"./inertValue-Bbw0taTK.js";import"./useListState-BebAKuaZ.js";import"./Tag-DU2PgVNU.js";import"./useHighlightSelectionDescription-CKsH3LhD.js";import"./useUpdateEffect-CP3VoDjV.js";import"./useHasTabbableChild-Dwy0MegB.js";import"./chevron-down-DJLSKW0f.js";import"./Button.module-Co5e5YHp.js";import"./check-Dlnjv4Lh.js";import"./useToggleState-CgTGU9_W.js";import"./Virtualizer-B9qkKvli.js";const Le={component:c,title:"Examples/Form",tags:["autodocs"],argTypes:{}},o={args:{},render:()=>{const m=["Banan","Apple","Mango"];return e.jsxs(d,{children:[e.jsx(i,{size:12,children:e.jsx(t,{label:"Ange ditt fullständiga namn",description:"Glöm inte dina eventuella mellannamn!"})}),e.jsx(i,{size:12,children:e.jsx(t,{label:"Personnummmer",description:"Anges på formen ÅÅMMDD-XXXX"})}),e.jsx(i,{size:12,children:e.jsx(l,{label:"Vilken är din favoritfrukt",placeholder:"Välj en frukt",selectionMode:"single",items:m.map(r=>({id:r,name:r})),children:r=>e.jsx(p,{...r,children:r.name})})}),e.jsx(i,{children:e.jsx(a,{children:"Skicka"})})]})}},s={args:{},render:()=>{const m=["A","B","C"],r=["Anledning A","Anledning B","Anledning C"];return e.jsx("div",{children:e.jsxs(d,{children:[e.jsx(i,{size:{xs:12,sm:6},children:e.jsx(x,{label:"Anledning",description:"Ange anledning till att du söker i databasen",children:r.map(n=>e.jsx(u,{value:n,children:n},n))})}),e.jsx(i,{size:{xs:12,sm:6},children:e.jsx(I,{label:"Databas",description:"Välj databas att söka i",children:m.map(n=>e.jsx(G,{value:n,children:n},n))})}),e.jsx(i,{size:{xs:12,sm:6},children:e.jsx(t,{label:"Namn",description:""})}),e.jsx(i,{size:{xs:12,sm:6},children:e.jsx(t,{label:"Personnummer"})}),e.jsx(i,{size:{xs:12,sm:6},children:e.jsx(l,{label:"Kön",description:"Kan lämnas tomt",placeholder:"Välj kön",selectionMode:"single",items:m.map(n=>({name:n,id:n})),children:n=>e.jsx(p,{...n,children:n.name})})}),e.jsx(i,{size:{xs:12,sm:6},children:e.jsx(t,{label:"Ärendekod"})}),e.jsx(i,{size:"auto",children:e.jsx(a,{children:"Sök"})}),e.jsx(i,{size:"auto",children:e.jsx(a,{variant:"secondary",children:"Rensa"})})]})})}};o.parameters={...o.parameters,docs:{...o.parameters?.docs,source:{originalSource:`{
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
