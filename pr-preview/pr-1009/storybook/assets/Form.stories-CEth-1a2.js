import{j as e}from"./iframe-CSIMALEo.js";import{$ as c}from"./Form-B8RAAmya.js";import{G as d}from"./Grid-sdtKZIcN.js";import{G as i}from"./GridItem-Cl1Z0a-q.js";import{T as t}from"./TextField-CWBnFcgF.js";import{S as l}from"./Select-CvV8tAnp.js";import{B as a}from"./Button-DVHbJF0m.js";import{R as x,a as u}from"./Radio-D2u165wL.js";import{C as I}from"./CheckboxGroup-Dm8f7TXW.js";import{C as G}from"./Checkbox-C6vxJGdX.js";import{L as p}from"./ListBoxItem-DYDBOofN.js";import"./preload-helper-PPVm8Dsz.js";import"./utils-BhFaZXMS.js";import"./clsx-B-dksMZM.js";import"./useFormValidation-DdycJShS.js";import"./useFocusRing-YF8rxIXT.js";import"./index-Bg0fwusk.js";import"./index-Cko5PELv.js";import"./clsx-Ciqy0D92.js";import"./TextFieldBase-qqaHdySb.js";import"./TextField-BEGHc3aN.js";import"./FieldError-QzWPofCp.js";import"./Text-CgjfMSMX.js";import"./Text-DAP7-Chs.js";import"./RSPContexts-B6yeYefJ.js";import"./Group-LvfcS3pd.js";import"./Input-D-u988Ye.js";import"./Hidden-Bzf4_Pb3.js";import"./Button-URk4kmEe.js";import"./useLabels-CPdLbOLr.js";import"./useButton-BV6dPOCz.js";import"./useTextField-OpsHCfDn.js";import"./useControlledState-gQFNofvS.js";import"./useField-xRcIPMLR.js";import"./TextField.module-CgqiUiYQ.js";import"./Label-nRchqJPS.js";import"./Dialog-Dc3-Xu4e.js";import"./OverlayArrow-Bd5xf0_A.js";import"./useResizeObserver-Dl6BNA6V.js";import"./Collection-D7usJqLj.js";import"./index-DETqQTae.js";import"./Separator-lAZ_4zB9.js";import"./SelectionManager-C7GMCLRn.js";import"./useEvent-B5sTb3e5.js";import"./scrollIntoView-CtWAMHuk.js";import"./SelectionIndicator-CbrJhCXm.js";import"./useDescription-PhgKx27S.js";import"./ListKeyboardDelegate-DFwfPiIs.js";import"./PressResponder-D-Lp16BO.js";import"./useLocalizedStringFormatter-B9G0gFgf.js";import"./LocalizedStringFormatter-wnoc2RuQ.js";import"./animation-CwOsGgVW.js";import"./getScrollParent-Cpn7MDkE.js";import"./VisuallyHidden-De97aW8X.js";import"./x-DyzJKXcb.js";import"./createLucideIcon-DF3n-g_Z.js";import"./useLocalizedStringFormatter-jyLw659G.js";import"./Heading-0UZEitdo.js";import"./info-BVBUXgQd.js";import"./Popover-CtzoBQ8h.js";import"./intlStrings-ZMTSFH_M.js";import"./ListBox-UejksHnS.js";import"./DragAndDrop-CRLprptu.js";import"./inertValue-DnwNV6xo.js";import"./useListState-CGr5GKlq.js";import"./Tag-Cw9_ocDN.js";import"./useHighlightSelectionDescription-DfwuDFdg.js";import"./useUpdateEffect-DaeGuwDF.js";import"./useHasTabbableChild-x-vFIhXv.js";import"./chevron-down-Do29mAZY.js";import"./Button.module-Co5e5YHp.js";import"./check-Cnu_VKr9.js";import"./useToggleState-BXd2JGF6.js";import"./Virtualizer-gVW86_rR.js";const Le={component:c,title:"Examples/Form",tags:["autodocs"],argTypes:{}},o={args:{},render:()=>{const m=["Banan","Apple","Mango"];return e.jsxs(d,{children:[e.jsx(i,{size:12,children:e.jsx(t,{label:"Ange ditt fullständiga namn",description:"Glöm inte dina eventuella mellannamn!"})}),e.jsx(i,{size:12,children:e.jsx(t,{label:"Personnummmer",description:"Anges på formen ÅÅMMDD-XXXX"})}),e.jsx(i,{size:12,children:e.jsx(l,{label:"Vilken är din favoritfrukt",placeholder:"Välj en frukt",selectionMode:"single",items:m.map(r=>({id:r,name:r})),children:r=>e.jsx(p,{...r,children:r.name})})}),e.jsx(i,{children:e.jsx(a,{children:"Skicka"})})]})}},s={args:{},render:()=>{const m=["A","B","C"],r=["Anledning A","Anledning B","Anledning C"];return e.jsx("div",{children:e.jsxs(d,{children:[e.jsx(i,{size:{xs:12,sm:6},children:e.jsx(x,{label:"Anledning",description:"Ange anledning till att du söker i databasen",children:r.map(n=>e.jsx(u,{value:n,children:n},n))})}),e.jsx(i,{size:{xs:12,sm:6},children:e.jsx(I,{label:"Databas",description:"Välj databas att söka i",children:m.map(n=>e.jsx(G,{value:n,children:n},n))})}),e.jsx(i,{size:{xs:12,sm:6},children:e.jsx(t,{label:"Namn",description:""})}),e.jsx(i,{size:{xs:12,sm:6},children:e.jsx(t,{label:"Personnummer"})}),e.jsx(i,{size:{xs:12,sm:6},children:e.jsx(l,{label:"Kön",description:"Kan lämnas tomt",placeholder:"Välj kön",selectionMode:"single",items:m.map(n=>({name:n,id:n})),children:n=>e.jsx(p,{...n,children:n.name})})}),e.jsx(i,{size:{xs:12,sm:6},children:e.jsx(t,{label:"Ärendekod"})}),e.jsx(i,{size:"auto",children:e.jsx(a,{children:"Sök"})}),e.jsx(i,{size:"auto",children:e.jsx(a,{variant:"secondary",children:"Rensa"})})]})})}};o.parameters={...o.parameters,docs:{...o.parameters?.docs,source:{originalSource:`{
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
