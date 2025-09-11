import{j as n}from"./iframe-BdgLdgYE.js";import{$ as j}from"./Form-nPcIFRDC.js";import{G}from"./Grid-CQuKqzfG.js";import{G as e}from"./GridItem-DeHUJR9I.js";import{T as r}from"./TextField-B-h3rhyB.js";import{S as I}from"./Select-DZNvRNUl.js";import{B as a}from"./Button-DoG7b90P.js";import{R as g,a as b}from"./Radio-3xmIc5A_.js";import{C as h}from"./CheckboxGroup-B_GjsXvg.js";import{C as k}from"./Checkbox-BB2iomzj.js";import"./preload-helper-Dp1pzeXC.js";import"./utils-BvcxwFyW.js";import"./clsx-B-dksMZM.js";import"./useFormValidation-j2b4Svql.js";import"./useFocusRing-CTNShohj.js";import"./index-bdnO63b_.js";import"./index-BK0Ncq4b.js";import"./TextFieldBase-CHYsg8Gk.js";import"./TextField-Dq_zmstA.js";import"./FieldError-CU13nm55.js";import"./Text-l-A5Z5Hz.js";import"./Text-Cn-ae3_x.js";import"./ListKeyboardDelegate-CPp65dVC.js";import"./SelectionManager-Ny1Sem7f.js";import"./useEvent-CC6p_nb1.js";import"./scrollIntoView-Dsrcj58z.js";import"./FocusScope-7ZFiyo7C.js";import"./useDescription-BLhSGx0Q.js";import"./useControlledState-CnQUdn_q.js";import"./Group-DSxqUI04.js";import"./Input-B2teMo_2.js";import"./Hidden-CBixdTTx.js";import"./Button-WyhW3_uk.js";import"./useLabels-CvTKfdWu.js";import"./useButton-D5My0K8O.js";import"./useTextField-cLJ0z3Vl.js";import"./useField-C3ODo7tn.js";import"./TextField.module-DjUItNl5.js";import"./Label-YEmhP7ci.js";import"./Dialog-DgWq9cLy.js";import"./RSPContexts-Dc_gSHep.js";import"./OverlayArrow-BtUkbWER.js";import"./useResizeObserver-YhNeHsC-.js";import"./Collection-BL_MIQ9r.js";import"./index-CkIM88CH.js";import"./Separator-C2Cu4Kwo.js";import"./PressResponder-C9ap61WA.js";import"./useLocalizedStringFormatter-ILYc6jSb.js";import"./LocalizedStringFormatter-BB0Nk989.js";import"./getScrollParent-CvodOSaS.js";import"./VisuallyHidden-CbJqQ_pY.js";import"./Dialog-B7Y2zPU9.js";import"./useLocalizedStringFormatter-e74m6xoj.js";import"./x-BRdayo4W.js";import"./createLucideIcon-C7t1_r_C.js";import"./Heading-Dpx6Lkvg.js";import"./info-DLkcqjGU.js";import"./Tag-D37lN2pd.js";import"./ListBox-0KcyJf0b.js";import"./DragAndDrop-C7bS6ts4.js";import"./inertValue-BYYWeGWj.js";import"./useListState-B1oRON4L.js";import"./useHighlightSelectionDescription-Bhtmh4oD.js";import"./useUpdateEffect-gXZaNdRA.js";import"./useHasTabbableChild-GHepJ7Pa.js";import"./check-D_aTXqO-.js";import"./ListBoxSection-DuCy-aZI.js";import"./Virtualizer-qcSFrAOT.js";import"./useObserveElement-CVm5drgb.js";import"./chevron-down-CsvaoM7y.js";import"./Button.module-DRhvPh0f.js";import"./useToggleState-B3HfxaGD.js";const $n={component:j,title:"Examples/Form",tags:["autodocs"],argTypes:{}},m={args:{},render:()=>{const t=["Banan","Apple","Mango"];return n.jsxs(G,{children:[n.jsx(e,{size:12,children:n.jsx(r,{label:"Ange ditt fullständiga namn",description:"Glöm inte dina eventuella mellannamn!"})}),n.jsx(e,{size:12,children:n.jsx(r,{label:"Personnummmer",description:"Anges på formen ÅÅMMDD-XXXX"})}),n.jsx(e,{size:12,children:n.jsx(I,{label:"Vilken är din favoritfrukt",placeholder:"Välj en frukt",selectionMode:"single",options:t.map(o=>({id:o,name:o}))})}),n.jsx(e,{children:n.jsx(a,{children:"Skicka"})})]})}},s={args:{},render:()=>{const t=["A","B","C"],o=["Anledning A","Anledning B","Anledning C"];return n.jsx("div",{children:n.jsxs(G,{children:[n.jsx(e,{size:{xs:12,sm:6},children:n.jsx(g,{label:"Anledning",description:"Ange anledning till att du söker i databasen",children:o.map(i=>n.jsx(b,{value:i,children:i},i))})}),n.jsx(e,{size:{xs:12,sm:6},children:n.jsx(h,{label:"Databas",description:"Välj databas att söka i",children:t.map(i=>n.jsx(k,{value:i,children:i},i))})}),n.jsx(e,{size:{xs:12,sm:6},children:n.jsx(r,{label:"Namn",description:""})}),n.jsx(e,{size:{xs:12,sm:6},children:n.jsx(r,{label:"Personnummer"})}),n.jsx(e,{size:{xs:12,sm:6},children:n.jsx(I,{label:"Kön",description:"Kan lämnas tomt",placeholder:"Välj kön",selectionMode:"single",options:t.map(i=>({name:i,id:i}))})}),n.jsx(e,{size:{xs:12,sm:6},children:n.jsx(r,{label:"Ärendekod"})}),n.jsx(e,{size:"auto",children:n.jsx(a,{children:"Sök"})}),n.jsx(e,{size:"auto",children:n.jsx(a,{variant:"secondary",children:"Rensa"})})]})})}};var d,l,p;m.parameters={...m.parameters,docs:{...(d=m.parameters)==null?void 0:d.docs,source:{originalSource:`{
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
