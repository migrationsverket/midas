import{j as e}from"./iframe-BEJN6Kxj.js";import{$ as c}from"./Form-DfyEbNXE.js";import{G as d}from"./Grid-BVhAduUp.js";import{G as i}from"./GridItem-C-QKpPpM.js";import{T as t}from"./TextField-Dz1ZQ7SI.js";import{S as l}from"./Select-BaGBH3lz.js";import{B as a}from"./Button-CStAPZI-.js";import{R as x,a as u}from"./Radio-CCHM__0B.js";import{C as I}from"./CheckboxGroup-BG6VTkcW.js";import{C as G}from"./Checkbox-qBMYKazd.js";import{L as p}from"./ListBoxItem-DSJ4dUJS.js";import"./preload-helper-PPVm8Dsz.js";import"./utils-CrGBDRkS.js";import"./clsx-B-dksMZM.js";import"./useFormValidation-CzpRDG9-.js";import"./useFocusRing-eqCY1XUY.js";import"./index-D62Nhkqi.js";import"./index-h8IQGtJP.js";import"./clsx-Ciqy0D92.js";import"./TextFieldBase-BffJFQlH.js";import"./TextField-DO2-GxX0.js";import"./FieldError-DgfjuVzW.js";import"./Text-DxjUFe6b.js";import"./Text-Cz34VrmV.js";import"./RSPContexts-D9Aj9BI_.js";import"./Group-DZBeaY65.js";import"./Input-BAe9miJC.js";import"./Hidden-fVuPKruJ.js";import"./Button-w6H2Sg3d.js";import"./useLabels-NwX4Qgl6.js";import"./useButton-9wB6vFCI.js";import"./useTextField-DGTvX6Si.js";import"./useControlledState-CwdPjKis.js";import"./useField-DuaCTKKw.js";import"./TextField.module-CgqiUiYQ.js";import"./Label-Erj7xXAT.js";import"./Dialog-D-TlG1Q7.js";import"./OverlayArrow-B9GvEsfM.js";import"./useResizeObserver-DGp2E8uC.js";import"./Collection-C0zL_sAG.js";import"./index-RlhfcIpf.js";import"./Separator-CeN3zVTD.js";import"./SelectionManager-cZjLQm_r.js";import"./useEvent-CrvnL7jH.js";import"./scrollIntoView-CtWAMHuk.js";import"./SelectionIndicator-DVtFm3e-.js";import"./useDescription-tLKe2g5W.js";import"./ListKeyboardDelegate-pfwT5Ajx.js";import"./PressResponder-Bj_4ulTg.js";import"./useLocalizedStringFormatter-fztwDLIc.js";import"./LocalizedStringFormatter-wnoc2RuQ.js";import"./animation-DUyzyJca.js";import"./getScrollParent-Cpn7MDkE.js";import"./VisuallyHidden-du_qoG-V.js";import"./x-VDRCJe-m.js";import"./createLucideIcon-DlFkL0lK.js";import"./useLocalizedStringFormatter-DmUmyjCk.js";import"./Heading-B4IUzRMR.js";import"./info-CFsdIS2T.js";import"./Popover-CwJFC2rT.js";import"./intlStrings-ZMTSFH_M.js";import"./ListBox-CJykgjJj.js";import"./DragAndDrop-BN9B-mA9.js";import"./inertValue-C_IZdAhr.js";import"./useListState-DeuSkrZK.js";import"./Tag-BoZGtiDH.js";import"./useHighlightSelectionDescription-Bd2xCd4o.js";import"./useUpdateEffect-DM2mAhts.js";import"./useHasTabbableChild-D39loQu1.js";import"./chevron-down-DOq6U2f-.js";import"./Button.module-Co5e5YHp.js";import"./check-B8Bqt9So.js";import"./useToggleState-7dfebPpM.js";import"./Virtualizer-CTVM-IAn.js";const Le={component:c,title:"Examples/Form",tags:["autodocs"],argTypes:{}},o={args:{},render:()=>{const m=["Banan","Apple","Mango"];return e.jsxs(d,{children:[e.jsx(i,{size:12,children:e.jsx(t,{label:"Ange ditt fullständiga namn",description:"Glöm inte dina eventuella mellannamn!"})}),e.jsx(i,{size:12,children:e.jsx(t,{label:"Personnummmer",description:"Anges på formen ÅÅMMDD-XXXX"})}),e.jsx(i,{size:12,children:e.jsx(l,{label:"Vilken är din favoritfrukt",placeholder:"Välj en frukt",selectionMode:"single",items:m.map(r=>({id:r,name:r})),children:r=>e.jsx(p,{...r,children:r.name})})}),e.jsx(i,{children:e.jsx(a,{children:"Skicka"})})]})}},s={args:{},render:()=>{const m=["A","B","C"],r=["Anledning A","Anledning B","Anledning C"];return e.jsx("div",{children:e.jsxs(d,{children:[e.jsx(i,{size:{xs:12,sm:6},children:e.jsx(x,{label:"Anledning",description:"Ange anledning till att du söker i databasen",children:r.map(n=>e.jsx(u,{value:n,children:n},n))})}),e.jsx(i,{size:{xs:12,sm:6},children:e.jsx(I,{label:"Databas",description:"Välj databas att söka i",children:m.map(n=>e.jsx(G,{value:n,children:n},n))})}),e.jsx(i,{size:{xs:12,sm:6},children:e.jsx(t,{label:"Namn",description:""})}),e.jsx(i,{size:{xs:12,sm:6},children:e.jsx(t,{label:"Personnummer"})}),e.jsx(i,{size:{xs:12,sm:6},children:e.jsx(l,{label:"Kön",description:"Kan lämnas tomt",placeholder:"Välj kön",selectionMode:"single",items:m.map(n=>({name:n,id:n})),children:n=>e.jsx(p,{...n,children:n.name})})}),e.jsx(i,{size:{xs:12,sm:6},children:e.jsx(t,{label:"Ärendekod"})}),e.jsx(i,{size:"auto",children:e.jsx(a,{children:"Sök"})}),e.jsx(i,{size:"auto",children:e.jsx(a,{variant:"secondary",children:"Rensa"})})]})})}};o.parameters={...o.parameters,docs:{...o.parameters?.docs,source:{originalSource:`{
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
