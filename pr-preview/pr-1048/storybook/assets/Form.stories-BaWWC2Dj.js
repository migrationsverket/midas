import{j as e}from"./iframe-CGGmCHdK.js";import{$ as c}from"./Form-Cp7q5sqz.js";import{G as d}from"./Grid-CsjpCE5l.js";import{G as i}from"./GridItem-Ctrbp_FJ.js";import{a as x,R as u}from"./Radio-DC_hS07o.js";import{C as I}from"./CheckboxGroup-DeijffP1.js";import{C as G}from"./Checkbox-BRLzLiU5.js";import{T as t}from"./TextField-CnyHKTri.js";import{S as l}from"./Select--TF-Ehyv.js";import{L as p}from"./ListBoxItem-BB8zjGjo.js";import{B as a}from"./Button-q0sQUu-L.js";import"./preload-helper-PPVm8Dsz.js";import"./utils-D-bfWJQo.js";import"./clsx-B-dksMZM.js";import"./useFormValidation-DwbgJzYa.js";import"./useFocusRing-BpvWxL7t.js";import"./index-DCMIOYtC.js";import"./index-xSCn676G.js";import"./clsx-Ciqy0D92.js";import"./Group-ClVJ7xHX.js";import"./FieldError-DeWUCxqP.js";import"./Text-DLgi0cnJ.js";import"./Text-C7tJFFeN.js";import"./Button-CSNXBxJJ.js";import"./Hidden-yGKkmiYH.js";import"./number-DfkVkf0F.js";import"./useLabels-DYBD-9_u.js";import"./useButton-BhWcO4Um.js";import"./SelectionIndicator-BFYE2p2o.js";import"./useField-Czho_fib.js";import"./VisuallyHidden-3IaiNxxm.js";import"./useControlledState-x5f61b7i.js";import"./Label-CNsW1mhl.js";import"./Dialog-DuamB8dP.js";import"./RSPContexts-B3O5q3W4.js";import"./OverlayArrow-BUXPKnE5.js";import"./useResizeObserver-BXnAWn-N.js";import"./Collection-BGFQqU5g.js";import"./index-XTyyo0jd.js";import"./Separator-CkDmqnMN.js";import"./SelectionManager-CyjXmeST.js";import"./useEvent-BELLYkgM.js";import"./scrollIntoView-CtWAMHuk.js";import"./useDescription-D5Oxry_M.js";import"./ListKeyboardDelegate-DXI6yf3X.js";import"./PressResponder-DwoaXRnV.js";import"./useLocalizedStringFormatter-BPgmIhkN.js";import"./LocalizedStringFormatter-wnoc2RuQ.js";import"./animation-hJrK8dEa.js";import"./getScrollParent-Cpn7MDkE.js";import"./Modal-CunRVayh.js";import"./x-CGpjQ8Iu.js";import"./createLucideIcon-D7mqoZIq.js";import"./useLocalizedStringFormatter-w_7AiL4k.js";import"./Heading-PKm7yygK.js";import"./info-CeCeZudF.js";import"./Popover-B_Xv86pN.js";import"./check-DJf7oi2z.js";import"./useToggleState-6knEw6PI.js";import"./TextFieldBase-Bx-Rgrev.js";import"./Input-Citleluy.js";import"./useTextField-BrjILwP2.js";import"./TextField.module-Cm6797Xw.js";import"./intlStrings-ZMTSFH_M.js";import"./ListBox-B4szY4fZ.js";import"./DragAndDrop-CYOZIPXb.js";import"./inertValue-xjhObg55.js";import"./useListState-BHPTu0J2.js";import"./Tag-DhzHEq7b.js";import"./useHighlightSelectionDescription-BojtquNi.js";import"./useUpdateEffect-BLSduk9i.js";import"./useHasTabbableChild-BeY5r4yZ.js";import"./chevron-down-DBD2sb19.js";import"./Virtualizer-DA7GvD25.js";import"./Button.module-Co5e5YHp.js";const ye={component:c,title:"Examples/Form",tags:["autodocs"],argTypes:{}},o={args:{},render:()=>{const m=["Banan","Apple","Mango"];return e.jsxs(d,{children:[e.jsx(i,{size:12,children:e.jsx(t,{label:"Ange ditt fullständiga namn",description:"Glöm inte dina eventuella mellannamn!"})}),e.jsx(i,{size:12,children:e.jsx(t,{label:"Personnummmer",description:"Anges på formen ÅÅMMDD-XXXX"})}),e.jsx(i,{size:12,children:e.jsx(l,{label:"Vilken är din favoritfrukt",placeholder:"Välj en frukt",selectionMode:"single",items:m.map(r=>({id:r,name:r})),children:r=>e.jsx(p,{...r,children:r.name})})}),e.jsx(i,{children:e.jsx(a,{children:"Skicka"})})]})}},s={args:{},render:()=>{const m=["A","B","C"],r=["Anledning A","Anledning B","Anledning C"];return e.jsx("div",{children:e.jsxs(d,{children:[e.jsx(i,{size:{xs:12,sm:6},children:e.jsx(x,{label:"Anledning",description:"Ange anledning till att du söker i databasen",children:r.map(n=>e.jsx(u,{value:n,children:n},n))})}),e.jsx(i,{size:{xs:12,sm:6},children:e.jsx(I,{label:"Databas",description:"Välj databas att söka i",children:m.map(n=>e.jsx(G,{value:n,children:n},n))})}),e.jsx(i,{size:{xs:12,sm:6},children:e.jsx(t,{label:"Namn",description:""})}),e.jsx(i,{size:{xs:12,sm:6},children:e.jsx(t,{label:"Personnummer"})}),e.jsx(i,{size:{xs:12,sm:6},children:e.jsx(l,{label:"Kön",description:"Kan lämnas tomt",placeholder:"Välj kön",selectionMode:"single",items:m.map(n=>({name:n,id:n})),children:n=>e.jsx(p,{...n,children:n.name})})}),e.jsx(i,{size:{xs:12,sm:6},children:e.jsx(t,{label:"Ärendekod"})}),e.jsx(i,{size:"auto",children:e.jsx(a,{children:"Sök"})}),e.jsx(i,{size:"auto",children:e.jsx(a,{variant:"secondary",children:"Rensa"})})]})})}};o.parameters={...o.parameters,docs:{...o.parameters?.docs,source:{originalSource:`{
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
}`,...s.parameters?.docs?.source}}};const Ke=["SimpleForm","TwoColumnForm"];export{o as SimpleForm,s as TwoColumnForm,Ke as __namedExportsOrder,ye as default};
