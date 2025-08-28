import{j as n}from"./iframe-DhAOCxVN.js";import{$ as j}from"./Form-cTQOyXOX.js";import{G}from"./Grid-CudiuGyy.js";import{G as e}from"./GridItem-CaNQCvym.js";import{T as r}from"./TextField-BD0LhnEV.js";import{S as I}from"./Select-D9QIqnCV.js";import{B as a}from"./Button-DVb4cN1-.js";import{R as g,a as b}from"./Radio-BojcXys-.js";import{C as h}from"./CheckboxGroup-BfX8yC0c.js";import{C as k}from"./Checkbox-DWsmQkmM.js";import"./preload-helper-Dp1pzeXC.js";import"./utils-BzX55kZw.js";import"./clsx-B-dksMZM.js";import"./useFormValidation-1Y593jBq.js";import"./useFocusRing-D9YfDeiq.js";import"./index-CRlzHYXR.js";import"./index-jZJUgnDE.js";import"./TextFieldBase-Bfdb3TDD.js";import"./TextField-DgmvpdrJ.js";import"./FieldError-CCKyQlSA.js";import"./Text-Df0xGPIV.js";import"./Text-I35tB3dn.js";import"./Input-Dc65lHcE.js";import"./Hidden-CgzyjEys.js";import"./Button-U8vp_YZM.js";import"./useLabels-mlo8aLYZ.js";import"./useButton-C6-4Qlv7.js";import"./useTextField-DMQiVarj.js";import"./useControlledState-BqQl71pi.js";import"./useField-Dx44f6us.js";import"./TextField.module-D7za08S7.js";import"./Label-CwicXsat.js";import"./Dialog-BbQyrlb6.js";import"./RSPContexts-BXhkZJba.js";import"./OverlayArrow--7QXXgTV.js";import"./useResizeObserver-9DBbNDNN.js";import"./Collection-BE5zUVNd.js";import"./index-CZeCO9Y2.js";import"./Separator-DIP0wQ2T.js";import"./SelectionManager-DoRKjjHz.js";import"./useEvent-D_rLS3yW.js";import"./scrollIntoView-Dsrcj58z.js";import"./FocusScope-BscklGPH.js";import"./useDescription-BxVunDy9.js";import"./ListKeyboardDelegate-B_9YaRgO.js";import"./PressResponder-V6Zod-Yj.js";import"./useLocalizedStringFormatter-8J_BHZbW.js";import"./LocalizedStringFormatter-BB0Nk989.js";import"./getScrollParent-CvodOSaS.js";import"./VisuallyHidden-ChtneAPf.js";import"./Dialog-DePC5dK5.js";import"./useLocalizedStringFormatter-p6-UF-7l.js";import"./x-D7TLJ6QK.js";import"./createLucideIcon-BUNyOUb1.js";import"./Heading-BYzWGJ3-.js";import"./info-baloCyTF.js";import"./Tag-B2DFFJfE.js";import"./ListBox-KoFJA4Ip.js";import"./DragAndDrop-Ciey3sQZ.js";import"./inertValue-4eDuFTet.js";import"./useListState-DSCwm8yU.js";import"./useHighlightSelectionDescription-DDJP49eo.js";import"./useUpdateEffect-OvTt5k04.js";import"./useHasTabbableChild-CkIjzbyh.js";import"./check-CuN89yFu.js";import"./ListBoxSection-D98haq2W.js";import"./Virtualizer-CdOX8SQT.js";import"./useObserveElement-Cy_kXlJF.js";import"./chevron-down-CtUFsP8s.js";import"./Button.module-DKVuWS4g.js";import"./Group-stwyTxVo.js";import"./useToggleState-BaiLVVZb.js";const $n={component:j,title:"Examples/Form",tags:["autodocs"],argTypes:{}},m={args:{},render:()=>{const t=["Banan","Apple","Mango"];return n.jsxs(G,{children:[n.jsx(e,{size:12,children:n.jsx(r,{label:"Ange ditt fullständiga namn",description:"Glöm inte dina eventuella mellannamn!"})}),n.jsx(e,{size:12,children:n.jsx(r,{label:"Personnummmer",description:"Anges på formen ÅÅMMDD-XXXX"})}),n.jsx(e,{size:12,children:n.jsx(I,{label:"Vilken är din favoritfrukt",placeholder:"Välj en frukt",selectionMode:"single",options:t.map(o=>({id:o,name:o}))})}),n.jsx(e,{children:n.jsx(a,{children:"Skicka"})})]})}},s={args:{},render:()=>{const t=["A","B","C"],o=["Anledning A","Anledning B","Anledning C"];return n.jsx("div",{children:n.jsxs(G,{children:[n.jsx(e,{size:{xs:12,sm:6},children:n.jsx(g,{label:"Anledning",description:"Ange anledning till att du söker i databasen",children:o.map(i=>n.jsx(b,{value:i,children:i},i))})}),n.jsx(e,{size:{xs:12,sm:6},children:n.jsx(h,{label:"Databas",description:"Välj databas att söka i",children:t.map(i=>n.jsx(k,{value:i,children:i},i))})}),n.jsx(e,{size:{xs:12,sm:6},children:n.jsx(r,{label:"Namn",description:""})}),n.jsx(e,{size:{xs:12,sm:6},children:n.jsx(r,{label:"Personnummer"})}),n.jsx(e,{size:{xs:12,sm:6},children:n.jsx(I,{label:"Kön",description:"Kan lämnas tomt",placeholder:"Välj kön",selectionMode:"single",options:t.map(i=>({name:i,id:i}))})}),n.jsx(e,{size:{xs:12,sm:6},children:n.jsx(r,{label:"Ärendekod"})}),n.jsx(e,{size:"auto",children:n.jsx(a,{children:"Sök"})}),n.jsx(e,{size:"auto",children:n.jsx(a,{variant:"secondary",children:"Rensa"})})]})})}};var d,l,p;m.parameters={...m.parameters,docs:{...(d=m.parameters)==null?void 0:d.docs,source:{originalSource:`{
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
