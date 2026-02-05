import{j as e}from"./iframe-DQprq_kP.js";import{$ as c}from"./Form-Dq0mzgBq.js";import{G as d}from"./Grid-BX0Dycjo.js";import{G as i}from"./GridItem-ADDzVEkA.js";import{a as x,R as u}from"./Radio-DbpxIgqJ.js";import{C as I}from"./CheckboxGroup-gI_du4-2.js";import{C as G}from"./Checkbox-C0XRNjK5.js";import{T as t}from"./TextField-BGtDIE5w.js";import{S as l}from"./Select-BMbT3r2r.js";import{L as p}from"./ListBoxItem-KTiVmCqK.js";import{B as a}from"./Button-BqlETkBs.js";import"./preload-helper-PPVm8Dsz.js";import"./utils-CzYL7WyR.js";import"./clsx-B-dksMZM.js";import"./useFormValidation-Dn6RDdQ2.js";import"./useFocusRing-BVbjxz3f.js";import"./index-Zi6SpqS6.js";import"./index-BkSkOuU3.js";import"./clsx-Ciqy0D92.js";import"./Group-Doe4TNfn.js";import"./FieldError-Dp6D5HDL.js";import"./Text-DvwepU_B.js";import"./Text-BezPGlQS.js";import"./Button-DWUsuc72.js";import"./Hidden-BWrSuujl.js";import"./useLabels-ZvQNUnV5.js";import"./useButton-BnQ8yP1B.js";import"./SelectionIndicator-h3b0GmHJ.js";import"./useField-CfLWi5yw.js";import"./VisuallyHidden-p948zCvh.js";import"./useControlledState-cwJwYt4X.js";import"./Label-_nhONEG_.js";import"./Dialog-CT34nMoo.js";import"./RSPContexts-BiHEw_SQ.js";import"./OverlayArrow-Cn3H2BnM.js";import"./useResizeObserver-Cv2PDqBS.js";import"./Collection-CcekytqK.js";import"./index-Cts5wTmE.js";import"./Separator-IRg4fm7P.js";import"./SelectionManager-B1dinrhP.js";import"./useEvent-ZYXRQoQI.js";import"./scrollIntoView-CtWAMHuk.js";import"./useDescription-Biv56RfI.js";import"./ListKeyboardDelegate-CY-jE1ru.js";import"./PressResponder-D5jy6-4e.js";import"./useLocalizedStringFormatter-BzU75U7z.js";import"./LocalizedStringFormatter-wnoc2RuQ.js";import"./animation-RNoxVknm.js";import"./getScrollParent-Cpn7MDkE.js";import"./x-DU8z3NoO.js";import"./createLucideIcon-DrbblNCp.js";import"./useLocalizedStringFormatter-BUsvZMK4.js";import"./Heading-ncacdurI.js";import"./info-Cr3QR3Jm.js";import"./Popover-C83hkT5Q.js";import"./check-DCkO_6z5.js";import"./useToggleState-BW3rGxKj.js";import"./TextFieldBase-e7KxzHAx.js";import"./TextField-CCxnZ774.js";import"./Input-BBYPT399.js";import"./useTextField-j4hXddcD.js";import"./TextField.module-DpzeWGpt.js";import"./intlStrings-ZMTSFH_M.js";import"./ListBox-DhJ3oiJz.js";import"./DragAndDrop-bLiSbvWB.js";import"./inertValue-B3qEyeSY.js";import"./useListState-DK-nhoqD.js";import"./Tag-el8ON6Qp.js";import"./useHighlightSelectionDescription-BG8PXvqz.js";import"./useUpdateEffect-CEmO5J1E.js";import"./useHasTabbableChild-BSufI4nF.js";import"./chevron-down-oWyz4uwE.js";import"./Virtualizer-BfQG1qIP.js";import"./Button.module-Co5e5YHp.js";const Le={component:c,title:"Examples/Form",tags:["autodocs"],argTypes:{}},o={args:{},render:()=>{const m=["Banan","Apple","Mango"];return e.jsxs(d,{children:[e.jsx(i,{size:12,children:e.jsx(t,{label:"Ange ditt fullständiga namn",description:"Glöm inte dina eventuella mellannamn!"})}),e.jsx(i,{size:12,children:e.jsx(t,{label:"Personnummmer",description:"Anges på formen ÅÅMMDD-XXXX"})}),e.jsx(i,{size:12,children:e.jsx(l,{label:"Vilken är din favoritfrukt",placeholder:"Välj en frukt",selectionMode:"single",items:m.map(r=>({id:r,name:r})),children:r=>e.jsx(p,{...r,children:r.name})})}),e.jsx(i,{children:e.jsx(a,{children:"Skicka"})})]})}},s={args:{},render:()=>{const m=["A","B","C"],r=["Anledning A","Anledning B","Anledning C"];return e.jsx("div",{children:e.jsxs(d,{children:[e.jsx(i,{size:{xs:12,sm:6},children:e.jsx(x,{label:"Anledning",description:"Ange anledning till att du söker i databasen",children:r.map(n=>e.jsx(u,{value:n,children:n},n))})}),e.jsx(i,{size:{xs:12,sm:6},children:e.jsx(I,{label:"Databas",description:"Välj databas att söka i",children:m.map(n=>e.jsx(G,{value:n,children:n},n))})}),e.jsx(i,{size:{xs:12,sm:6},children:e.jsx(t,{label:"Namn",description:""})}),e.jsx(i,{size:{xs:12,sm:6},children:e.jsx(t,{label:"Personnummer"})}),e.jsx(i,{size:{xs:12,sm:6},children:e.jsx(l,{label:"Kön",description:"Kan lämnas tomt",placeholder:"Välj kön",selectionMode:"single",items:m.map(n=>({name:n,id:n})),children:n=>e.jsx(p,{...n,children:n.name})})}),e.jsx(i,{size:{xs:12,sm:6},children:e.jsx(t,{label:"Ärendekod"})}),e.jsx(i,{size:"auto",children:e.jsx(a,{children:"Sök"})}),e.jsx(i,{size:"auto",children:e.jsx(a,{variant:"secondary",children:"Rensa"})})]})})}};o.parameters={...o.parameters,docs:{...o.parameters?.docs,source:{originalSource:`{
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
