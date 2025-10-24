import{j as n}from"./iframe-BfG47WCE.js";import{$ as j}from"./Form-C6aKg9Mk.js";import{G}from"./Grid-CBRpKzyP.js";import{G as e}from"./GridItem-DfQGmzeF.js";import{T as r}from"./TextField-Tp3GPtHn.js";import{S as I}from"./Select-B0hVKiCd.js";import{B as a}from"./Button-CDtCaXVO.js";import{R as g,a as b}from"./Radio-BlGQEyBe.js";import{C as h}from"./CheckboxGroup-D9TQttGb.js";import{C as k}from"./Checkbox-JDzkw7z4.js";import"./preload-helper-Dp1pzeXC.js";import"./utils-CXccqdfU.js";import"./clsx-B-dksMZM.js";import"./useFormValidation-CsBMjYnw.js";import"./useFocusRing-BOjBGLDj.js";import"./index-DCuUWyQy.js";import"./index-CRDODKkO.js";import"./clsx-Ciqy0D92.js";import"./TextFieldBase-DXZqi3vq.js";import"./TextField-Dxkw2BtX.js";import"./FieldError-DU4M_ckN.js";import"./Text-ohjBzHRx.js";import"./Text-BWvFK_Mn.js";import"./RSPContexts-BTzNv6Un.js";import"./Group-Dv1nSsx1.js";import"./Input-B3sosfpb.js";import"./Hidden-DpYl8mb0.js";import"./Button-gKMamKdV.js";import"./useLabels-CLZIjSTH.js";import"./useButton-DSbMmvSP.js";import"./useTextField-DaBcfaGq.js";import"./useControlledState-DTRY0BXW.js";import"./useField-D3i4YQ2z.js";import"./TextField.module-Ddb2XBAw.js";import"./Label-BoKnxqKR.js";import"./Dialog-Dwgxht5d.js";import"./OverlayArrow-B8YbFCXN.js";import"./useResizeObserver-C_CgulMS.js";import"./Collection-BAV1JVDc.js";import"./index-CU70dMTM.js";import"./Separator-D3N8nQn4.js";import"./SelectionManager-an24w0W8.js";import"./useEvent-UD9IeyHC.js";import"./scrollIntoView-CIwto5b8.js";import"./SelectionIndicator-BmnijtLU.js";import"./useDescription-DJDeLoDj.js";import"./ListKeyboardDelegate-xshkV1nQ.js";import"./PressResponder-CMcZ48Ok.js";import"./useLocalizedStringFormatter-DKuEyZ-H.js";import"./LocalizedStringFormatter-BB0Nk989.js";import"./getScrollParent-Dqz_7mKA.js";import"./VisuallyHidden-BXwgtAbI.js";import"./useLocalizedStringFormatter-CDP0Rw7k.js";import"./x-CH9ViGh0.js";import"./createLucideIcon-Dnia0Ejn.js";import"./Heading-ayaQ7uK2.js";import"./info-VWAwTIiR.js";import"./Popover-Cnj9prjq.js";import"./Tag-BHe2bN_5.js";import"./ListBox-CEGKUmAJ.js";import"./DragAndDrop-CGRDoBEv.js";import"./inertValue-CIg_x18X.js";import"./useListState-DaqaNpIp.js";import"./useHighlightSelectionDescription-B6UGANWy.js";import"./useUpdateEffect-Bw5Bf_kH.js";import"./useHasTabbableChild-D3-nIdW9.js";import"./check-CvMh2tA3.js";import"./ListBoxSection-DvnvZ3pl.js";import"./Virtualizer-D2SmZNN3.js";import"./chevron-down-DjMiXp2-.js";import"./Button.module-CcWMkJAG.js";import"./useToggleState-CS5uyt9M.js";const $n={component:j,title:"Examples/Form",tags:["autodocs"],argTypes:{}},m={args:{},render:()=>{const t=["Banan","Apple","Mango"];return n.jsxs(G,{children:[n.jsx(e,{size:12,children:n.jsx(r,{label:"Ange ditt fullständiga namn",description:"Glöm inte dina eventuella mellannamn!"})}),n.jsx(e,{size:12,children:n.jsx(r,{label:"Personnummmer",description:"Anges på formen ÅÅMMDD-XXXX"})}),n.jsx(e,{size:12,children:n.jsx(I,{label:"Vilken är din favoritfrukt",placeholder:"Välj en frukt",selectionMode:"single",options:t.map(o=>({id:o,name:o}))})}),n.jsx(e,{children:n.jsx(a,{children:"Skicka"})})]})}},s={args:{},render:()=>{const t=["A","B","C"],o=["Anledning A","Anledning B","Anledning C"];return n.jsx("div",{children:n.jsxs(G,{children:[n.jsx(e,{size:{xs:12,sm:6},children:n.jsx(g,{label:"Anledning",description:"Ange anledning till att du söker i databasen",children:o.map(i=>n.jsx(b,{value:i,children:i},i))})}),n.jsx(e,{size:{xs:12,sm:6},children:n.jsx(h,{label:"Databas",description:"Välj databas att söka i",children:t.map(i=>n.jsx(k,{value:i,children:i},i))})}),n.jsx(e,{size:{xs:12,sm:6},children:n.jsx(r,{label:"Namn",description:""})}),n.jsx(e,{size:{xs:12,sm:6},children:n.jsx(r,{label:"Personnummer"})}),n.jsx(e,{size:{xs:12,sm:6},children:n.jsx(I,{label:"Kön",description:"Kan lämnas tomt",placeholder:"Välj kön",selectionMode:"single",options:t.map(i=>({name:i,id:i}))})}),n.jsx(e,{size:{xs:12,sm:6},children:n.jsx(r,{label:"Ärendekod"})}),n.jsx(e,{size:"auto",children:n.jsx(a,{children:"Sök"})}),n.jsx(e,{size:"auto",children:n.jsx(a,{variant:"secondary",children:"Rensa"})})]})})}};var d,l,p;m.parameters={...m.parameters,docs:{...(d=m.parameters)==null?void 0:d.docs,source:{originalSource:`{
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
