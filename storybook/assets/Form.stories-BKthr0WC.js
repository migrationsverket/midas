import{j as e}from"./iframe-8IAuJWNM.js";import{$ as c}from"./Form-CjpCQL1Q.js";import{G as d}from"./Grid-DfutA7tb.js";import{G as i}from"./GridItem-C6kq_19v.js";import{T as t}from"./TextField-EYKuHLcI.js";import{S as l}from"./Select-BpDXf5Zd.js";import{B as a}from"./Button-DaIiUukL.js";import{R as x,a as u}from"./Radio-DFdvZoi7.js";import{C as I}from"./CheckboxGroup-CgT7CKBb.js";import{C as G}from"./Checkbox-C69wf2c8.js";import{L as p}from"./ListBoxItem-Ak2mXkhx.js";import"./preload-helper-PPVm8Dsz.js";import"./utils-DyygkSlh.js";import"./clsx-B-dksMZM.js";import"./useFormValidation-BTqQXxAG.js";import"./useFocusRing-B47DL3hX.js";import"./index-CB6TLzp4.js";import"./index-BmMgCWbD.js";import"./clsx-Ciqy0D92.js";import"./TextFieldBase-H3HD1FYK.js";import"./TextField-BO1TzSFL.js";import"./FieldError-CadBMv3M.js";import"./Text-BjJSlFEE.js";import"./Text-BPO4namz.js";import"./RSPContexts-SKLp7B5s.js";import"./Group-DFUFAPcE.js";import"./Input-C7N5ePwD.js";import"./Hidden-BPY21Mhp.js";import"./Button-BA4G7Dp7.js";import"./useLabels-Cjx1sCZW.js";import"./useButton-DKZseVPF.js";import"./useTextField-BcsYtwGj.js";import"./useControlledState-B1Gkxy2y.js";import"./useField-KDqZZJ02.js";import"./TextField.module-CgqiUiYQ.js";import"./Label-DgBcmBnc.js";import"./Dialog-Cqry6Aon.js";import"./OverlayArrow-oQTy-OmX.js";import"./useResizeObserver-Cmytyy8J.js";import"./Collection-cCOjAfI9.js";import"./index-N0Knnvj8.js";import"./Separator-WVGlWIcl.js";import"./SelectionManager-CBXhApTy.js";import"./useEvent-Bg6Tse3j.js";import"./scrollIntoView-CtWAMHuk.js";import"./SelectionIndicator-C5I6stQh.js";import"./useDescription-CmF9R5md.js";import"./ListKeyboardDelegate-VBWxipQV.js";import"./PressResponder-BW5YywL4.js";import"./useLocalizedStringFormatter-BLtacC3W.js";import"./LocalizedStringFormatter-wnoc2RuQ.js";import"./animation-Be_Cfo3p.js";import"./getScrollParent-Cpn7MDkE.js";import"./VisuallyHidden-BFkso3TE.js";import"./x-ChuqJttK.js";import"./createLucideIcon-B5ClGLmI.js";import"./useLocalizedStringFormatter-BVRAeowb.js";import"./Heading-Zpm27S2Z.js";import"./info-ukyOXwhb.js";import"./Popover-NfGU5fTW.js";import"./intlStrings-ZMTSFH_M.js";import"./ListBox-Dnx4loYm.js";import"./DragAndDrop-CjqS3dgz.js";import"./inertValue-BdywxWPn.js";import"./useListState-BN1ZtQAn.js";import"./Tag-CSD0PKNu.js";import"./useHighlightSelectionDescription-Bbb53vtY.js";import"./useUpdateEffect-Dy09ntE9.js";import"./useHasTabbableChild-CflM58AY.js";import"./chevron-down-5sYflHL7.js";import"./Button.module-Co5e5YHp.js";import"./check-CJyZMTi4.js";import"./useToggleState-CUDBHvFQ.js";import"./Virtualizer-CE0rVEKD.js";const Le={component:c,title:"Examples/Form",tags:["autodocs"],argTypes:{}},o={args:{},render:()=>{const m=["Banan","Apple","Mango"];return e.jsxs(d,{children:[e.jsx(i,{size:12,children:e.jsx(t,{label:"Ange ditt fullständiga namn",description:"Glöm inte dina eventuella mellannamn!"})}),e.jsx(i,{size:12,children:e.jsx(t,{label:"Personnummmer",description:"Anges på formen ÅÅMMDD-XXXX"})}),e.jsx(i,{size:12,children:e.jsx(l,{label:"Vilken är din favoritfrukt",placeholder:"Välj en frukt",selectionMode:"single",items:m.map(r=>({id:r,name:r})),children:r=>e.jsx(p,{...r,children:r.name})})}),e.jsx(i,{children:e.jsx(a,{children:"Skicka"})})]})}},s={args:{},render:()=>{const m=["A","B","C"],r=["Anledning A","Anledning B","Anledning C"];return e.jsx("div",{children:e.jsxs(d,{children:[e.jsx(i,{size:{xs:12,sm:6},children:e.jsx(x,{label:"Anledning",description:"Ange anledning till att du söker i databasen",children:r.map(n=>e.jsx(u,{value:n,children:n},n))})}),e.jsx(i,{size:{xs:12,sm:6},children:e.jsx(I,{label:"Databas",description:"Välj databas att söka i",children:m.map(n=>e.jsx(G,{value:n,children:n},n))})}),e.jsx(i,{size:{xs:12,sm:6},children:e.jsx(t,{label:"Namn",description:""})}),e.jsx(i,{size:{xs:12,sm:6},children:e.jsx(t,{label:"Personnummer"})}),e.jsx(i,{size:{xs:12,sm:6},children:e.jsx(l,{label:"Kön",description:"Kan lämnas tomt",placeholder:"Välj kön",selectionMode:"single",items:m.map(n=>({name:n,id:n})),children:n=>e.jsx(p,{...n,children:n.name})})}),e.jsx(i,{size:{xs:12,sm:6},children:e.jsx(t,{label:"Ärendekod"})}),e.jsx(i,{size:"auto",children:e.jsx(a,{children:"Sök"})}),e.jsx(i,{size:"auto",children:e.jsx(a,{variant:"secondary",children:"Rensa"})})]})})}};o.parameters={...o.parameters,docs:{...o.parameters?.docs,source:{originalSource:`{
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
