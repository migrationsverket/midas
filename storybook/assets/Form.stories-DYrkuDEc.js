import{j as e}from"./iframe-CiqJOzxF.js";import{$ as c}from"./Form-CRxifOsu.js";import{G as d}from"./Grid-DiuOW9Xd.js";import{G as i}from"./GridItem-DzROI6yZ.js";import{T as t}from"./TextField-A5eIQY8S.js";import{S as l}from"./Select-D1R-cUTg.js";import{B as a}from"./Button-CxRmwJHW.js";import{R as x,a as u}from"./Radio-Bf4bJyc6.js";import{C as I}from"./CheckboxGroup-BQF9NEQk.js";import{C as G}from"./Checkbox-ByYZPP4I.js";import{L as p}from"./ListBoxItem-B4NSClXz.js";import"./preload-helper-PPVm8Dsz.js";import"./utils-0GsTBzJl.js";import"./clsx-B-dksMZM.js";import"./useFormValidation-BHCltIgr.js";import"./useFocusRing-gGMqfhtg.js";import"./index-DrndIZWb.js";import"./index-CFgqDMnH.js";import"./clsx-Ciqy0D92.js";import"./TextFieldBase-D9D8wKrd.js";import"./TextField-CSVTyu6P.js";import"./FieldError-CwZpQUJo.js";import"./Text-Ch9Sljly.js";import"./Text-Dn4hqnjy.js";import"./RSPContexts-C0dEMWbh.js";import"./Group-DzhdZ-u0.js";import"./Input-C8DI4jqy.js";import"./Hidden-CFvcIHES.js";import"./Button-BXds3-7Z.js";import"./useLabels-BB9Q2rMv.js";import"./useButton-m7b0MM_h.js";import"./useTextField-BZ_VAzGr.js";import"./useControlledState-B5UnhFwk.js";import"./useField-BKRlvos-.js";import"./TextField.module-CgqiUiYQ.js";import"./Label-BJMWqc0W.js";import"./Dialog-Dxwwv4Kn.js";import"./OverlayArrow-BzRu9K3f.js";import"./useResizeObserver-gqMwxCuL.js";import"./Collection-BizYL9zZ.js";import"./index-PGwKz-re.js";import"./Separator-sBb7m_eW.js";import"./SelectionManager-Cs_75vrL.js";import"./useEvent-lRnGMY-c.js";import"./scrollIntoView-CtWAMHuk.js";import"./SelectionIndicator-ChpEnvYL.js";import"./useDescription-CTOINnPD.js";import"./ListKeyboardDelegate-DZDwGlUz.js";import"./PressResponder-Bx05VmIl.js";import"./useLocalizedStringFormatter-CIhkSn5J.js";import"./LocalizedStringFormatter-wnoc2RuQ.js";import"./animation-x2twpE3n.js";import"./getScrollParent-Cpn7MDkE.js";import"./VisuallyHidden-Tv_5dhqS.js";import"./x-zbQhWPRB.js";import"./createLucideIcon-DT02zB1r.js";import"./useLocalizedStringFormatter-CEHHKrhf.js";import"./Heading-RSqUFAKa.js";import"./info-B1L5jFLY.js";import"./Popover-Br5z27dt.js";import"./intlStrings-ZMTSFH_M.js";import"./ListBox-CUC6Kqmx.js";import"./DragAndDrop-BUt81l9B.js";import"./inertValue-UE4kHpuZ.js";import"./useListState-BANd10JD.js";import"./Tag-DoTAeBIY.js";import"./useHighlightSelectionDescription-DbjtX9KD.js";import"./useUpdateEffect-DWMgmur7.js";import"./useHasTabbableChild-D_U3g7vo.js";import"./chevron-down-DweZYhIJ.js";import"./Button.module-Co5e5YHp.js";import"./check-Ci7kXBpi.js";import"./useToggleState-Dk-qrfKI.js";import"./Virtualizer-C7B1F-o-.js";const Le={component:c,title:"Examples/Form",tags:["autodocs"],argTypes:{}},o={args:{},render:()=>{const m=["Banan","Apple","Mango"];return e.jsxs(d,{children:[e.jsx(i,{size:12,children:e.jsx(t,{label:"Ange ditt fullständiga namn",description:"Glöm inte dina eventuella mellannamn!"})}),e.jsx(i,{size:12,children:e.jsx(t,{label:"Personnummmer",description:"Anges på formen ÅÅMMDD-XXXX"})}),e.jsx(i,{size:12,children:e.jsx(l,{label:"Vilken är din favoritfrukt",placeholder:"Välj en frukt",selectionMode:"single",items:m.map(r=>({id:r,name:r})),children:r=>e.jsx(p,{...r,children:r.name})})}),e.jsx(i,{children:e.jsx(a,{children:"Skicka"})})]})}},s={args:{},render:()=>{const m=["A","B","C"],r=["Anledning A","Anledning B","Anledning C"];return e.jsx("div",{children:e.jsxs(d,{children:[e.jsx(i,{size:{xs:12,sm:6},children:e.jsx(x,{label:"Anledning",description:"Ange anledning till att du söker i databasen",children:r.map(n=>e.jsx(u,{value:n,children:n},n))})}),e.jsx(i,{size:{xs:12,sm:6},children:e.jsx(I,{label:"Databas",description:"Välj databas att söka i",children:m.map(n=>e.jsx(G,{value:n,children:n},n))})}),e.jsx(i,{size:{xs:12,sm:6},children:e.jsx(t,{label:"Namn",description:""})}),e.jsx(i,{size:{xs:12,sm:6},children:e.jsx(t,{label:"Personnummer"})}),e.jsx(i,{size:{xs:12,sm:6},children:e.jsx(l,{label:"Kön",description:"Kan lämnas tomt",placeholder:"Välj kön",selectionMode:"single",items:m.map(n=>({name:n,id:n})),children:n=>e.jsx(p,{...n,children:n.name})})}),e.jsx(i,{size:{xs:12,sm:6},children:e.jsx(t,{label:"Ärendekod"})}),e.jsx(i,{size:"auto",children:e.jsx(a,{children:"Sök"})}),e.jsx(i,{size:"auto",children:e.jsx(a,{variant:"secondary",children:"Rensa"})})]})})}};o.parameters={...o.parameters,docs:{...o.parameters?.docs,source:{originalSource:`{
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
