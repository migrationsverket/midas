import{j as e}from"./iframe-CKFV4t_1.js";import{$ as c}from"./Form-D0HW_j4G.js";import{G as d}from"./Grid-DPpZib9-.js";import{G as i}from"./GridItem-CDYWkGe5.js";import{T as t}from"./TextField-BApnCmMb.js";import{S as l}from"./Select-Cb13vN5B.js";import{B as a}from"./Button-CX41FOI9.js";import{R as x,a as u}from"./Radio-CQsoZLJ7.js";import{C as I}from"./CheckboxGroup-RXpAqgCg.js";import{C as G}from"./Checkbox-DfOSFSIt.js";import{L as p}from"./ListBoxItem-CgrwLAbz.js";import"./preload-helper-PPVm8Dsz.js";import"./utils-DI9iWWNt.js";import"./clsx-B-dksMZM.js";import"./useFormValidation-B6Fe8WXE.js";import"./useFocusRing-BZ_PqxVl.js";import"./index-BW6JxsHj.js";import"./index-BqBdriJQ.js";import"./clsx-Ciqy0D92.js";import"./TextFieldBase-xpQqY1Cf.js";import"./TextField-DctKp6CV.js";import"./FieldError-CfIn2uhl.js";import"./Text-DzSDPQzh.js";import"./Text-Dv3jZ_aV.js";import"./RSPContexts-BzweYrWZ.js";import"./Group-zHd8lyXU.js";import"./Input-CRg4xvg6.js";import"./Hidden-DihczV1P.js";import"./Button-DI-ffzDX.js";import"./useLabels-C6LUrwjA.js";import"./useButton-CShiPmlY.js";import"./useTextField-Dv4ibsMe.js";import"./useControlledState-BDpF19zF.js";import"./useField-BS1r04HM.js";import"./TextField.module-CgqiUiYQ.js";import"./Label-XKoSEVsC.js";import"./Dialog-BQ_mqNXy.js";import"./OverlayArrow-gZMjfUNs.js";import"./useResizeObserver-HMX32PgH.js";import"./Collection-DZeW03SE.js";import"./index-vTCi_tu9.js";import"./Separator-hYZTGZos.js";import"./SelectionManager-Dv3dFLkJ.js";import"./useEvent-CAPMhfOK.js";import"./scrollIntoView-s5FNUvm8.js";import"./SelectionIndicator-CblqZDMx.js";import"./useDescription-XRc2AN6L.js";import"./ListKeyboardDelegate-tcadBjjn.js";import"./PressResponder-CuU5Vb0J.js";import"./useLocalizedStringFormatter-CKBqLoBy.js";import"./LocalizedStringFormatter-wnoc2RuQ.js";import"./getScrollParent-DClmF7Sb.js";import"./VisuallyHidden-POfTLuvh.js";import"./x-tZVRH0aO.js";import"./createLucideIcon-sgDlsuts.js";import"./useLocalizedStringFormatter-DIR_98tQ.js";import"./Heading-B6vunHA3.js";import"./info-67DKVwtn.js";import"./Popover-i2s2TNUi.js";import"./intlStrings-ZMTSFH_M.js";import"./ListBox-CEI10L7l.js";import"./DragAndDrop-DMrWZFw2.js";import"./inertValue-CJhkTfnB.js";import"./useListState-CAqnTEKj.js";import"./Tag-CuZJWCXF.js";import"./useHighlightSelectionDescription-DWvBKM5l.js";import"./useUpdateEffect-CTu4Uaiu.js";import"./useHasTabbableChild-Bg6Gnnnd.js";import"./chevron-down-BYZcY-1t.js";import"./Button.module-Co5e5YHp.js";import"./check-BcHvUnb9.js";import"./useToggleState-BZ9jEmy2.js";import"./Virtualizer-B8PFFNxr.js";const Xe={component:c,title:"Examples/Form",tags:["autodocs"],argTypes:{}},o={args:{},render:()=>{const m=["Banan","Apple","Mango"];return e.jsxs(d,{children:[e.jsx(i,{size:12,children:e.jsx(t,{label:"Ange ditt fullständiga namn",description:"Glöm inte dina eventuella mellannamn!"})}),e.jsx(i,{size:12,children:e.jsx(t,{label:"Personnummmer",description:"Anges på formen ÅÅMMDD-XXXX"})}),e.jsx(i,{size:12,children:e.jsx(l,{label:"Vilken är din favoritfrukt",placeholder:"Välj en frukt",selectionMode:"single",items:m.map(r=>({id:r,name:r})),children:r=>e.jsx(p,{...r,children:r.name})})}),e.jsx(i,{children:e.jsx(a,{children:"Skicka"})})]})}},s={args:{},render:()=>{const m=["A","B","C"],r=["Anledning A","Anledning B","Anledning C"];return e.jsx("div",{children:e.jsxs(d,{children:[e.jsx(i,{size:{xs:12,sm:6},children:e.jsx(x,{label:"Anledning",description:"Ange anledning till att du söker i databasen",children:r.map(n=>e.jsx(u,{value:n,children:n},n))})}),e.jsx(i,{size:{xs:12,sm:6},children:e.jsx(I,{label:"Databas",description:"Välj databas att söka i",children:m.map(n=>e.jsx(G,{value:n,children:n},n))})}),e.jsx(i,{size:{xs:12,sm:6},children:e.jsx(t,{label:"Namn",description:""})}),e.jsx(i,{size:{xs:12,sm:6},children:e.jsx(t,{label:"Personnummer"})}),e.jsx(i,{size:{xs:12,sm:6},children:e.jsx(l,{label:"Kön",description:"Kan lämnas tomt",placeholder:"Välj kön",selectionMode:"single",items:m.map(n=>({name:n,id:n})),children:n=>e.jsx(p,{...n,children:n.name})})}),e.jsx(i,{size:{xs:12,sm:6},children:e.jsx(t,{label:"Ärendekod"})}),e.jsx(i,{size:"auto",children:e.jsx(a,{children:"Sök"})}),e.jsx(i,{size:"auto",children:e.jsx(a,{variant:"secondary",children:"Rensa"})})]})})}};o.parameters={...o.parameters,docs:{...o.parameters?.docs,source:{originalSource:`{
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
