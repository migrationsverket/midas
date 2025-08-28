import{j as n}from"./iframe-BymvUqKP.js";import{$ as j}from"./Form-BdZ7pam0.js";import{G}from"./Grid-B8F6h0hP.js";import{G as e}from"./GridItem-CnBKxS-4.js";import{T as r}from"./TextField-BhaihTWk.js";import{S as I}from"./Select-YsugsJJn.js";import{B as a}from"./Button-BQSdHMPn.js";import{R as g,a as b}from"./Radio-C9cTqYrw.js";import{C as h}from"./CheckboxGroup-Biby8rhp.js";import{C as k}from"./Checkbox-BHsdZtoX.js";import"./preload-helper-Dp1pzeXC.js";import"./utils-rb4YB5As.js";import"./clsx-B-dksMZM.js";import"./useFormValidation-BjWZfnGY.js";import"./useFocusRing-B5a0BACV.js";import"./index-BdO3h5j6.js";import"./index-BtIfnAZu.js";import"./TextFieldBase-B366rcdR.js";import"./TextField-0uAhMhwk.js";import"./FieldError-CvJgLtdx.js";import"./Text-CGU0VBwl.js";import"./Text-D4CRxw3X.js";import"./Input-B27nfw9x.js";import"./Hidden-BabHfU_U.js";import"./Button-Lk52rT94.js";import"./useLabels-CdhBAFPk.js";import"./useButton-DvmEgx7n.js";import"./useTextField-CG-C_8Cj.js";import"./useControlledState-CKQ2uq-a.js";import"./useField-BApIxokn.js";import"./TextField.module-BrIGiDQC.js";import"./Label-uzDMO0di.js";import"./Dialog-DAKAgxVu.js";import"./RSPContexts-DE9clZxd.js";import"./OverlayArrow-cTMEuj6R.js";import"./useResizeObserver-C2_zowTk.js";import"./Collection-CSUK2zFy.js";import"./index-yQWX9Jza.js";import"./Separator-BwaIfIA9.js";import"./SelectionManager-BRJAQGfB.js";import"./useEvent-Cu2hEZWS.js";import"./scrollIntoView-Dsrcj58z.js";import"./FocusScope-BAAApUg0.js";import"./useDescription-LYSFu1bo.js";import"./ListKeyboardDelegate-y4b5BvJC.js";import"./PressResponder-CYhTy3CF.js";import"./useLocalizedStringFormatter-v-dTtMpq.js";import"./LocalizedStringFormatter-BB0Nk989.js";import"./getScrollParent-CvodOSaS.js";import"./VisuallyHidden-__33ht0F.js";import"./Dialog-DSLlrH7c.js";import"./useLocalizedStringFormatter-DqRfpi5E.js";import"./x-CSkz_7qk.js";import"./createLucideIcon-D7dPbQ88.js";import"./Heading-CEAdlJk7.js";import"./info-Cfk8jvhT.js";import"./Tag-CKOBkZQD.js";import"./ListBox-BgIh-Yum.js";import"./DragAndDrop-Bv8vJR7i.js";import"./inertValue-Bk6iT-3C.js";import"./useListState-BklQzqoy.js";import"./useHighlightSelectionDescription-BFhX-LZQ.js";import"./useUpdateEffect-C873sotd.js";import"./useHasTabbableChild-ByNuW0Nq.js";import"./check-CgclNUXX.js";import"./ListBoxSection-Diiudhqh.js";import"./Virtualizer-Qf6kqGiw.js";import"./useObserveElement-BkRLQnoO.js";import"./chevron-down-DU7_dqts.js";import"./Button.module-CF2bVDCq.js";import"./Group-C2HfprB4.js";import"./useToggleState-BUTG7aKk.js";const $n={component:j,title:"Examples/Form",tags:["autodocs"],argTypes:{}},m={args:{},render:()=>{const t=["Banan","Apple","Mango"];return n.jsxs(G,{children:[n.jsx(e,{size:12,children:n.jsx(r,{label:"Ange ditt fullständiga namn",description:"Glöm inte dina eventuella mellannamn!"})}),n.jsx(e,{size:12,children:n.jsx(r,{label:"Personnummmer",description:"Anges på formen ÅÅMMDD-XXXX"})}),n.jsx(e,{size:12,children:n.jsx(I,{label:"Vilken är din favoritfrukt",placeholder:"Välj en frukt",selectionMode:"single",options:t.map(o=>({id:o,name:o}))})}),n.jsx(e,{children:n.jsx(a,{children:"Skicka"})})]})}},s={args:{},render:()=>{const t=["A","B","C"],o=["Anledning A","Anledning B","Anledning C"];return n.jsx("div",{children:n.jsxs(G,{children:[n.jsx(e,{size:{xs:12,sm:6},children:n.jsx(g,{label:"Anledning",description:"Ange anledning till att du söker i databasen",children:o.map(i=>n.jsx(b,{value:i,children:i},i))})}),n.jsx(e,{size:{xs:12,sm:6},children:n.jsx(h,{label:"Databas",description:"Välj databas att söka i",children:t.map(i=>n.jsx(k,{value:i,children:i},i))})}),n.jsx(e,{size:{xs:12,sm:6},children:n.jsx(r,{label:"Namn",description:""})}),n.jsx(e,{size:{xs:12,sm:6},children:n.jsx(r,{label:"Personnummer"})}),n.jsx(e,{size:{xs:12,sm:6},children:n.jsx(I,{label:"Kön",description:"Kan lämnas tomt",placeholder:"Välj kön",selectionMode:"single",options:t.map(i=>({name:i,id:i}))})}),n.jsx(e,{size:{xs:12,sm:6},children:n.jsx(r,{label:"Ärendekod"})}),n.jsx(e,{size:"auto",children:n.jsx(a,{children:"Sök"})}),n.jsx(e,{size:"auto",children:n.jsx(a,{variant:"secondary",children:"Rensa"})})]})})}};var d,l,p;m.parameters={...m.parameters,docs:{...(d=m.parameters)==null?void 0:d.docs,source:{originalSource:`{
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
