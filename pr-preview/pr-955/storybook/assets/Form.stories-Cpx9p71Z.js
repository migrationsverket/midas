import{j as e}from"./iframe-BYSujb5O.js";import{$ as c}from"./Form-BDQqXSmS.js";import{G as d}from"./Grid-3qsY4O71.js";import{G as i}from"./GridItem-BNYsPLQs.js";import{T as t}from"./TextField-BGkmIAI4.js";import{S as l}from"./Select-BH0MXXAM.js";import{B as a}from"./Button-B5_32c3T.js";import{R as x,a as u}from"./Radio-B0G-xnve.js";import{C as I}from"./CheckboxGroup-C_7B6mrQ.js";import{C as G}from"./Checkbox-B8D1fYHf.js";import{L as p}from"./ListBoxItem-BZtCM3J2.js";import"./preload-helper-PPVm8Dsz.js";import"./utils-BpYtCIZa.js";import"./clsx-B-dksMZM.js";import"./useFormValidation-9p9mjJmO.js";import"./useFocusRing-Cq6ZZkO6.js";import"./index-BTamtBiG.js";import"./index-BUtMmMz-.js";import"./clsx-Ciqy0D92.js";import"./TextFieldBase-BQxEa37m.js";import"./TextField-CeVj0lbV.js";import"./FieldError-BlAjSjix.js";import"./Text-DVuQNkTp.js";import"./Text-BXmZ9P-w.js";import"./RSPContexts-Ddiz57ni.js";import"./Group-CE5hkQJq.js";import"./Input-BxbFdiZd.js";import"./Hidden-BljVQJbf.js";import"./Button-CyeAVMHd.js";import"./useLabels-DVc_tfUB.js";import"./useButton-Bf-GHWc-.js";import"./useTextField-DMdPcIyp.js";import"./useControlledState-DjUFwNu-.js";import"./useField-BAkXw4Su.js";import"./TextField.module-CgqiUiYQ.js";import"./Label-Baygg4zK.js";import"./Dialog-D7Qgj7Ml.js";import"./OverlayArrow-Cur9cqCA.js";import"./useResizeObserver-C0JuC2JF.js";import"./Collection-C-pAO9Or.js";import"./index-CYIuoBMk.js";import"./Separator-WYKkiv7S.js";import"./SelectionManager-p8jb1tmD.js";import"./useEvent-CkTHhyNW.js";import"./scrollIntoView-D9VdN5NR.js";import"./SelectionIndicator-DwOCKDHm.js";import"./useDescription-5VSBaoAa.js";import"./ListKeyboardDelegate-Exvw7xTa.js";import"./PressResponder-eRXg6zS-.js";import"./useLocalizedStringFormatter-Dpys6Wq_.js";import"./LocalizedStringFormatter-wnoc2RuQ.js";import"./getScrollParent-Zzge8grx.js";import"./VisuallyHidden-BK_XVg_7.js";import"./x-BTh76Rd3.js";import"./createLucideIcon-CFUgjHlc.js";import"./useLocalizedStringFormatter-VLqr3pjp.js";import"./Heading-B8mAIRB8.js";import"./info-CGQyZDHS.js";import"./Popover-BixPE7LD.js";import"./intlStrings-ZMTSFH_M.js";import"./ListBox-ZY01pImR.js";import"./DragAndDrop-DdGeQGg-.js";import"./inertValue-DsHx-r7A.js";import"./useListState-B_OplmNJ.js";import"./Tag-Chahc_AN.js";import"./useHighlightSelectionDescription-CwoyTrbG.js";import"./useUpdateEffect-DJd9Nj8O.js";import"./useHasTabbableChild-D4LJNtET.js";import"./chevron-down-BX-Cq4MP.js";import"./Button.module-Co5e5YHp.js";import"./check-BshsavWg.js";import"./useToggleState-DxViWBfQ.js";import"./Virtualizer-BWBstB9h.js";const Xe={component:c,title:"Examples/Form",tags:["autodocs"],argTypes:{}},o={args:{},render:()=>{const m=["Banan","Apple","Mango"];return e.jsxs(d,{children:[e.jsx(i,{size:12,children:e.jsx(t,{label:"Ange ditt fullständiga namn",description:"Glöm inte dina eventuella mellannamn!"})}),e.jsx(i,{size:12,children:e.jsx(t,{label:"Personnummmer",description:"Anges på formen ÅÅMMDD-XXXX"})}),e.jsx(i,{size:12,children:e.jsx(l,{label:"Vilken är din favoritfrukt",placeholder:"Välj en frukt",selectionMode:"single",items:m.map(r=>({id:r,name:r})),children:r=>e.jsx(p,{...r,children:r.name})})}),e.jsx(i,{children:e.jsx(a,{children:"Skicka"})})]})}},s={args:{},render:()=>{const m=["A","B","C"],r=["Anledning A","Anledning B","Anledning C"];return e.jsx("div",{children:e.jsxs(d,{children:[e.jsx(i,{size:{xs:12,sm:6},children:e.jsx(x,{label:"Anledning",description:"Ange anledning till att du söker i databasen",children:r.map(n=>e.jsx(u,{value:n,children:n},n))})}),e.jsx(i,{size:{xs:12,sm:6},children:e.jsx(I,{label:"Databas",description:"Välj databas att söka i",children:m.map(n=>e.jsx(G,{value:n,children:n},n))})}),e.jsx(i,{size:{xs:12,sm:6},children:e.jsx(t,{label:"Namn",description:""})}),e.jsx(i,{size:{xs:12,sm:6},children:e.jsx(t,{label:"Personnummer"})}),e.jsx(i,{size:{xs:12,sm:6},children:e.jsx(l,{label:"Kön",description:"Kan lämnas tomt",placeholder:"Välj kön",selectionMode:"single",items:m.map(n=>({name:n,id:n})),children:n=>e.jsx(p,{...n,children:n.name})})}),e.jsx(i,{size:{xs:12,sm:6},children:e.jsx(t,{label:"Ärendekod"})}),e.jsx(i,{size:"auto",children:e.jsx(a,{children:"Sök"})}),e.jsx(i,{size:"auto",children:e.jsx(a,{variant:"secondary",children:"Rensa"})})]})})}};o.parameters={...o.parameters,docs:{...o.parameters?.docs,source:{originalSource:`{
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
