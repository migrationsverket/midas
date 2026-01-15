import{j as e}from"./iframe-ccFBI1Zy.js";import{$ as c}from"./Form-CSm1PNHd.js";import{G as d}from"./Grid-BzHgJwej.js";import{G as i}from"./GridItem-DhLFfgtu.js";import{T as t}from"./TextField-Cgdxy5Ym.js";import{S as l}from"./Select-BZWj42nV.js";import{B as a}from"./Button-BJwJ6DIM.js";import{R as x,a as u}from"./Radio-QWUJxuOC.js";import{C as I}from"./CheckboxGroup-CwXHCrZL.js";import{C as G}from"./Checkbox-C_pZgdjy.js";import{L as p}from"./ListBoxItem-BjtNCA7l.js";import"./preload-helper-PPVm8Dsz.js";import"./utils-BVj3-Cd3.js";import"./clsx-B-dksMZM.js";import"./useFormValidation-Dse-9b_j.js";import"./useFocusRing-C9VQOrA-.js";import"./index-dN5ydD_a.js";import"./index-Dusa60jE.js";import"./clsx-Ciqy0D92.js";import"./TextFieldBase-K5i0lTeF.js";import"./TextField-B2Oa3gVN.js";import"./FieldError-CVxfd_t0.js";import"./Text-mV_idVq_.js";import"./Text-CmBwCO8i.js";import"./RSPContexts-CBH8t1Y8.js";import"./Group-i7c5mH7a.js";import"./Input-cxtpnZ4I.js";import"./Hidden-p0IfrMWZ.js";import"./Button-CEnfx92n.js";import"./useLabels-CApjWlXB.js";import"./useButton-DsE6FkYL.js";import"./useTextField-HucvZY4o.js";import"./useControlledState-BI6Lp7H1.js";import"./useField-Cz6CbKez.js";import"./TextField.module-CgqiUiYQ.js";import"./Label-ClQqyWtu.js";import"./Dialog-BxCdY1ii.js";import"./OverlayArrow-Db7EG0iI.js";import"./useResizeObserver-BdONv8_0.js";import"./Collection-C-mL8fBH.js";import"./index-VMEIaRs3.js";import"./Separator-CsBVJhmI.js";import"./SelectionManager-CQM2oJP3.js";import"./useEvent-zMHUl8wo.js";import"./scrollIntoView-CtWAMHuk.js";import"./SelectionIndicator-BmjnCczp.js";import"./useDescription-B1c0tiyy.js";import"./ListKeyboardDelegate-BuXfkG1l.js";import"./PressResponder-gQEJyYV3.js";import"./useLocalizedStringFormatter-ClaIkQbq.js";import"./LocalizedStringFormatter-wnoc2RuQ.js";import"./animation-DtEjzElg.js";import"./getScrollParent-Cpn7MDkE.js";import"./VisuallyHidden-CfF4nhmt.js";import"./x-TQxST23O.js";import"./createLucideIcon-puHPRiC0.js";import"./useLocalizedStringFormatter-DAkizOqJ.js";import"./Heading-DS1q6uAH.js";import"./info-RiSIGvH5.js";import"./Popover-w1qdXOHw.js";import"./intlStrings-ZMTSFH_M.js";import"./ListBox-vlCWfH_H.js";import"./DragAndDrop-CJgbcV4-.js";import"./inertValue-CX9GXFvG.js";import"./useListState-CQdhkKwl.js";import"./Tag-DhYiOJkR.js";import"./useHighlightSelectionDescription-CTOElV4O.js";import"./useUpdateEffect-C9HkJm6q.js";import"./useHasTabbableChild-CwXrLPhU.js";import"./chevron-down-DGUO3smH.js";import"./Button.module-Co5e5YHp.js";import"./check-Xr83MG3E.js";import"./useToggleState-Dx27-afF.js";import"./Virtualizer-Cb_3FOaP.js";const Le={component:c,title:"Examples/Form",tags:["autodocs"],argTypes:{}},o={args:{},render:()=>{const m=["Banan","Apple","Mango"];return e.jsxs(d,{children:[e.jsx(i,{size:12,children:e.jsx(t,{label:"Ange ditt fullständiga namn",description:"Glöm inte dina eventuella mellannamn!"})}),e.jsx(i,{size:12,children:e.jsx(t,{label:"Personnummmer",description:"Anges på formen ÅÅMMDD-XXXX"})}),e.jsx(i,{size:12,children:e.jsx(l,{label:"Vilken är din favoritfrukt",placeholder:"Välj en frukt",selectionMode:"single",items:m.map(r=>({id:r,name:r})),children:r=>e.jsx(p,{...r,children:r.name})})}),e.jsx(i,{children:e.jsx(a,{children:"Skicka"})})]})}},s={args:{},render:()=>{const m=["A","B","C"],r=["Anledning A","Anledning B","Anledning C"];return e.jsx("div",{children:e.jsxs(d,{children:[e.jsx(i,{size:{xs:12,sm:6},children:e.jsx(x,{label:"Anledning",description:"Ange anledning till att du söker i databasen",children:r.map(n=>e.jsx(u,{value:n,children:n},n))})}),e.jsx(i,{size:{xs:12,sm:6},children:e.jsx(I,{label:"Databas",description:"Välj databas att söka i",children:m.map(n=>e.jsx(G,{value:n,children:n},n))})}),e.jsx(i,{size:{xs:12,sm:6},children:e.jsx(t,{label:"Namn",description:""})}),e.jsx(i,{size:{xs:12,sm:6},children:e.jsx(t,{label:"Personnummer"})}),e.jsx(i,{size:{xs:12,sm:6},children:e.jsx(l,{label:"Kön",description:"Kan lämnas tomt",placeholder:"Välj kön",selectionMode:"single",items:m.map(n=>({name:n,id:n})),children:n=>e.jsx(p,{...n,children:n.name})})}),e.jsx(i,{size:{xs:12,sm:6},children:e.jsx(t,{label:"Ärendekod"})}),e.jsx(i,{size:"auto",children:e.jsx(a,{children:"Sök"})}),e.jsx(i,{size:"auto",children:e.jsx(a,{variant:"secondary",children:"Rensa"})})]})})}};o.parameters={...o.parameters,docs:{...o.parameters?.docs,source:{originalSource:`{
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
