import{j as e}from"./iframe-CL23rVh3.js";import{$ as c}from"./Form-CyoqJmJ7.js";import{G as d}from"./Grid-C0iieFqe.js";import{G as i}from"./GridItem-CQrEtRso.js";import{T as t}from"./TextField-Flfg8MeM.js";import{S as l}from"./Select-C9l53P-1.js";import{B as a}from"./Button-BRfjEKmY.js";import{R as x,a as u}from"./Radio-CbcMkvvg.js";import{C as I}from"./CheckboxGroup-DdfWnNqH.js";import{C as G}from"./Checkbox-CgtkTnOm.js";import{L as p}from"./ListBoxItem-DTdsqunS.js";import"./preload-helper-PPVm8Dsz.js";import"./utils-CJ-Ij_R0.js";import"./clsx-B-dksMZM.js";import"./useFormValidation-D_Pj3Rz9.js";import"./useFocusRing-DkzWPJgi.js";import"./index-D2io7692.js";import"./index-Dps1x4rp.js";import"./clsx-Ciqy0D92.js";import"./TextFieldBase-uFKy3Xbq.js";import"./TextField-dmX27vPm.js";import"./FieldError-B8XPk18T.js";import"./Text-D1eXcxCX.js";import"./Text-CytNYYuf.js";import"./RSPContexts-BwT2hLmq.js";import"./Group-D2VA6dRY.js";import"./Input-BiW047CV.js";import"./Hidden-DgDLAcvn.js";import"./Button-UvNdmwwk.js";import"./useLabels-X6VpgWTq.js";import"./useButton-CPhZ5th1.js";import"./useTextField-DgT7k1YT.js";import"./useControlledState-BZgWFFOj.js";import"./useField-r5PwNz1w.js";import"./TextField.module-CgqiUiYQ.js";import"./Label-ndTmjWwr.js";import"./Dialog-BUG9FcSE.js";import"./OverlayArrow-DlR4o7ln.js";import"./useResizeObserver-CgV-xQ3S.js";import"./Collection-DmYijMBg.js";import"./index-CL2OrqBk.js";import"./Separator-B_3JL9pu.js";import"./SelectionManager-DWc2VhCs.js";import"./useEvent-DN98bbL5.js";import"./scrollIntoView-CtWAMHuk.js";import"./SelectionIndicator-CvZWjb_I.js";import"./useDescription-CGYkSA8m.js";import"./ListKeyboardDelegate-B_yZFk2R.js";import"./PressResponder-C7pkJOw0.js";import"./useLocalizedStringFormatter-C59J0DnG.js";import"./LocalizedStringFormatter-wnoc2RuQ.js";import"./animation-CEx-mtZ4.js";import"./getScrollParent-Cpn7MDkE.js";import"./VisuallyHidden-D3iEUUnG.js";import"./x-C4ZhBYeY.js";import"./createLucideIcon-CscazfU0.js";import"./useLocalizedStringFormatter-D_0t_udJ.js";import"./Heading-BhQ0A1J0.js";import"./info-Dz74NSTI.js";import"./Popover-C0UOUX9v.js";import"./intlStrings-ZMTSFH_M.js";import"./ListBox-yzj87DOt.js";import"./DragAndDrop-CnNJV1yV.js";import"./inertValue-Cbl7Jbr3.js";import"./useListState-CauV3hSk.js";import"./Tag-BzggzBTz.js";import"./useHighlightSelectionDescription-BDwKVWPu.js";import"./useUpdateEffect-BGO8Zadv.js";import"./useHasTabbableChild-ZDiXRJwG.js";import"./chevron-down-D7FYGkvG.js";import"./Button.module-Co5e5YHp.js";import"./check-LWF9xlTY.js";import"./useToggleState-CCwZpAqT.js";import"./Virtualizer-BBwg---P.js";const Le={component:c,title:"Examples/Form",tags:["autodocs"],argTypes:{}},o={args:{},render:()=>{const m=["Banan","Apple","Mango"];return e.jsxs(d,{children:[e.jsx(i,{size:12,children:e.jsx(t,{label:"Ange ditt fullständiga namn",description:"Glöm inte dina eventuella mellannamn!"})}),e.jsx(i,{size:12,children:e.jsx(t,{label:"Personnummmer",description:"Anges på formen ÅÅMMDD-XXXX"})}),e.jsx(i,{size:12,children:e.jsx(l,{label:"Vilken är din favoritfrukt",placeholder:"Välj en frukt",selectionMode:"single",items:m.map(r=>({id:r,name:r})),children:r=>e.jsx(p,{...r,children:r.name})})}),e.jsx(i,{children:e.jsx(a,{children:"Skicka"})})]})}},s={args:{},render:()=>{const m=["A","B","C"],r=["Anledning A","Anledning B","Anledning C"];return e.jsx("div",{children:e.jsxs(d,{children:[e.jsx(i,{size:{xs:12,sm:6},children:e.jsx(x,{label:"Anledning",description:"Ange anledning till att du söker i databasen",children:r.map(n=>e.jsx(u,{value:n,children:n},n))})}),e.jsx(i,{size:{xs:12,sm:6},children:e.jsx(I,{label:"Databas",description:"Välj databas att söka i",children:m.map(n=>e.jsx(G,{value:n,children:n},n))})}),e.jsx(i,{size:{xs:12,sm:6},children:e.jsx(t,{label:"Namn",description:""})}),e.jsx(i,{size:{xs:12,sm:6},children:e.jsx(t,{label:"Personnummer"})}),e.jsx(i,{size:{xs:12,sm:6},children:e.jsx(l,{label:"Kön",description:"Kan lämnas tomt",placeholder:"Välj kön",selectionMode:"single",items:m.map(n=>({name:n,id:n})),children:n=>e.jsx(p,{...n,children:n.name})})}),e.jsx(i,{size:{xs:12,sm:6},children:e.jsx(t,{label:"Ärendekod"})}),e.jsx(i,{size:"auto",children:e.jsx(a,{children:"Sök"})}),e.jsx(i,{size:"auto",children:e.jsx(a,{variant:"secondary",children:"Rensa"})})]})})}};o.parameters={...o.parameters,docs:{...o.parameters?.docs,source:{originalSource:`{
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
