import{j as n}from"./iframe-BhNAt-Le.js";import{$ as j}from"./Form-B8i50SN3.js";import{G}from"./Grid-DT0mWq1A.js";import{G as e}from"./GridItem-Jz02UoTg.js";import{T as r}from"./TextField-CF7Ob4Jh.js";import{S as I}from"./Select-CWLCgBAV.js";import{B as a}from"./Button-DXoknU2-.js";import{R as g,a as b}from"./Radio-Co19gR8w.js";import{C as h}from"./CheckboxGroup-BXPUe2Nk.js";import{C as k}from"./Checkbox-W-H09aqi.js";import"./preload-helper-Dp1pzeXC.js";import"./utils-DwE_0i4h.js";import"./clsx-B-dksMZM.js";import"./useFormValidation-BRA9SRMs.js";import"./useFocusRing-ch4nQheK.js";import"./index-BXKBE_Ak.js";import"./index-DtO_u-Kh.js";import"./TextFieldBase-Kdpd9T4O.js";import"./TextField-BeUB0FNp.js";import"./FieldError-DjubtutN.js";import"./Text-DUr5rJp6.js";import"./Text-CsQCwnJI.js";import"./context-CBvAntcS.js";import"./SelectionManager-CR-7_B0d.js";import"./useEvent-9a8iXA9j.js";import"./scrollIntoView-Dsrcj58z.js";import"./FocusScope-CP-f51dw.js";import"./useDescription-CX5zCIlR.js";import"./useControlledState-BpyXObHm.js";import"./Group-B7RSLC9h.js";import"./Input-Cv79fDQz.js";import"./Hidden-Bz3c6YmL.js";import"./Button-DT3z-dCp.js";import"./useLabels-BjZ5VuLP.js";import"./useButton-DaMa6Rli.js";import"./useTextField-B2-3QwDw.js";import"./useField-CeNNoGcD.js";import"./TextField.module-DjUItNl5.js";import"./Label-DaxZJog3.js";import"./Dialog-Dpk1DAsB.js";import"./RSPContexts-utrx_HSa.js";import"./OverlayArrow-CH-pK_XF.js";import"./useResizeObserver-DP6mBvqg.js";import"./Collection-Cq3LKqsO.js";import"./index-D10gcS5R.js";import"./Separator-5JL3iKI3.js";import"./PressResponder-Cvvxy0y7.js";import"./useLocalizedStringFormatter-DGvoab4q.js";import"./LocalizedStringFormatter-BB0Nk989.js";import"./getScrollParent-CvodOSaS.js";import"./VisuallyHidden-c9c_k5ca.js";import"./useLocalizedStringFormatter-B882yEQ9.js";import"./x-ngiYoKl4.js";import"./createLucideIcon-BLdM3YkS.js";import"./Heading-BU6_ieSO.js";import"./info-7jj-4Esq.js";import"./Popover-BHDaB_e8.js";import"./Tag-C_Ckcst2.js";import"./ListBox-CYOjiD3R.js";import"./DragAndDrop-DiJTx580.js";import"./inertValue-TOghF4HR.js";import"./useListState-DBjbyOJz.js";import"./useHighlightSelectionDescription-6hlAPqG6.js";import"./useUpdateEffect-CwzZ2OXi.js";import"./useHasTabbableChild-DGbiOVcN.js";import"./check-DxikBkXg.js";import"./ListBoxSection-B2VYaAsh.js";import"./Virtualizer-LwsjmVPL.js";import"./useObserveElement-DZI4gYGg.js";import"./chevron-down-Cd9WRqEl.js";import"./Button.module-DRhvPh0f.js";import"./useToggleState-DUPWmc1u.js";const $n={component:j,title:"Examples/Form",tags:["autodocs"],argTypes:{}},m={args:{},render:()=>{const t=["Banan","Apple","Mango"];return n.jsxs(G,{children:[n.jsx(e,{size:12,children:n.jsx(r,{label:"Ange ditt fullständiga namn",description:"Glöm inte dina eventuella mellannamn!"})}),n.jsx(e,{size:12,children:n.jsx(r,{label:"Personnummmer",description:"Anges på formen ÅÅMMDD-XXXX"})}),n.jsx(e,{size:12,children:n.jsx(I,{label:"Vilken är din favoritfrukt",placeholder:"Välj en frukt",selectionMode:"single",options:t.map(o=>({id:o,name:o}))})}),n.jsx(e,{children:n.jsx(a,{children:"Skicka"})})]})}},s={args:{},render:()=>{const t=["A","B","C"],o=["Anledning A","Anledning B","Anledning C"];return n.jsx("div",{children:n.jsxs(G,{children:[n.jsx(e,{size:{xs:12,sm:6},children:n.jsx(g,{label:"Anledning",description:"Ange anledning till att du söker i databasen",children:o.map(i=>n.jsx(b,{value:i,children:i},i))})}),n.jsx(e,{size:{xs:12,sm:6},children:n.jsx(h,{label:"Databas",description:"Välj databas att söka i",children:t.map(i=>n.jsx(k,{value:i,children:i},i))})}),n.jsx(e,{size:{xs:12,sm:6},children:n.jsx(r,{label:"Namn",description:""})}),n.jsx(e,{size:{xs:12,sm:6},children:n.jsx(r,{label:"Personnummer"})}),n.jsx(e,{size:{xs:12,sm:6},children:n.jsx(I,{label:"Kön",description:"Kan lämnas tomt",placeholder:"Välj kön",selectionMode:"single",options:t.map(i=>({name:i,id:i}))})}),n.jsx(e,{size:{xs:12,sm:6},children:n.jsx(r,{label:"Ärendekod"})}),n.jsx(e,{size:"auto",children:n.jsx(a,{children:"Sök"})}),n.jsx(e,{size:"auto",children:n.jsx(a,{variant:"secondary",children:"Rensa"})})]})})}};var d,l,p;m.parameters={...m.parameters,docs:{...(d=m.parameters)==null?void 0:d.docs,source:{originalSource:`{
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
          <Select label='Vilken är din favoritfrukt' placeholder='Välj en frukt' selectionMode='single' options={ITEMS.map(i => ({
          id: i,
          name: i
        }))} />
        </GridItem>

        <GridItem>
          <Button>Skicka</Button>
        </GridItem>
      </Grid>;
  }
}`,...(p=(l=m.parameters)==null?void 0:l.docs)==null?void 0:p.source}}};var c,x,u;s.parameters={...s.parameters,docs:{...(c=s.parameters)==null?void 0:c.docs,source:{originalSource:`{
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
            <Select label='Kön' description='Kan lämnas tomt' placeholder='Välj kön' selectionMode='single' options={ITEMS.map(i => ({
            name: i,
            id: i
          }))} />
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
}`,...(u=(x=s.parameters)==null?void 0:x.docs)==null?void 0:u.source}}};const wn=["SimpleForm","TwoColumnForm"];export{m as SimpleForm,s as TwoColumnForm,wn as __namedExportsOrder,$n as default};
